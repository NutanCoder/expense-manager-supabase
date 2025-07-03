import type {
  ICreateProfile,
  IProfileImageResponse,
  ProfileResponse,
} from "../types/profile";
import { supabaseClient } from "../utils/supbase";
import { v4 } from "uuid";

const TABLE_NAME = "profile";

async function getProfileById(id: string): Promise<ProfileResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select()
    .eq("id", id);
  if (error) {
    return { error: error, data: null };
  }
  if (data.length == 0) {
    return { error: "No Profile found by id " + id, data: null };
  } else {
    return { error: null, data: data[0] };
  }
}

async function updateProfileById(
  id: string,
  payload: ICreateProfile
): Promise<ProfileResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .update(payload)
    .eq("id", id)
    .select();
  if (error) {
    return { error: error, data: null };
  }
  if (data.length == 0) {
    return { error: "No Profile found by id" + id, data: null };
  } else {
    return { error: null, data: data[0] };
  }
}

const uploadAvatar = async (file: File): Promise<IProfileImageResponse> => {
  const randomUUID = v4();
  const filenames = file.name.split(".");
  const fielExtension = filenames[filenames.length - 1];
  const filePath = `${randomUUID}.${fielExtension}`;

  const { error } = await supabaseClient.storage
    .from("profile")
    .upload(filePath, file);

  if (error) {
    return { data: null, error: error.message };
  }

  const { data } = supabaseClient.storage
    .from("profile")
    .getPublicUrl(filePath);
  return { data: data.publicUrl, error: null };
};

export const profileService = {
  getProfileById,
  updateProfileById,
  uploadAvatar,
};

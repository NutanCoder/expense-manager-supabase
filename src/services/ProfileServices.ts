import type { ICreateProfile, ProfileResponse } from "../types/profile";
import { supabaseClient } from "../utils/supbase";

const TABLE_NAME = "profiles";

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

export const profileService = {
  getProfileById,
  updateProfileById,
};

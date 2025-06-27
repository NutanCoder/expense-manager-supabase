import type { ServiceResponse } from "./response";

interface ICreateProfile {
  full_name: string;
  email: string;
  avatar_url: string;
}

interface IProfile extends ICreateProfile {
  id: string;
  created_at: string;
  updated_at: string;
}

export type ProfileResponse = ServiceResponse<IProfile | null>;

import type { User, Subscription } from "@supabase/supabase-js";
import type { ServiceResponse } from "./response";

export type UserResponse = ServiceResponse<User | null>;
export type SignOutResponse = ServiceResponse<boolean | null>;
export type AuthStateUpdateResponse = ServiceResponse<Subscription>;

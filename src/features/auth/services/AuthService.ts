import type {
  SignUpWithPasswordCredentials,
  User,
} from "@supabase/supabase-js";
import type {
  AuthStateUpdateResponse,
  SignOutResponse,
  UserResponse,
} from "../../../types/auth";
import { supabaseClient } from "@/api/supbase";

async function signin(email: string, password: string): Promise<UserResponse> {
  const { error, data } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return { data: null, error: error };
  } else {
    return { data: data.user, error: null };
  }
}

async function register(
  email: string,
  password: string
): Promise<UserResponse> {
  const credential: SignUpWithPasswordCredentials = {
    email,
    password,
  };
  const { data, error } = await supabaseClient.auth.signUp(credential);
  if (error) {
    return { data: null, error: error.message };
  } else {
    return { data: data.user, error: null };
  }
}

async function getUser(): Promise<UserResponse> {
  const { data, error } = await supabaseClient.auth.getSession();
  const session = data.session;
  if (error) {
    return { data: null, error: error };
  } else if (session != null) {
    return { data: session.user, error: null };
  } else {
    return { data: null, error: "Seomthing went wrong" };
  }
}

async function sigout(): Promise<SignOutResponse> {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    return { data: null, error: error };
  } else {
    return { data: true, error: null };
  }
}

function onAuthStateUpdate(
  callback: (user: User | undefined) => void
): AuthStateUpdateResponse {
  const { data } = supabaseClient.auth.onAuthStateChange((_, session) => {
    callback(session?.user);
  });
  return { data: data.subscription, error: null };
}

export const authService = {
  signin,
  register,
  getUser,
  sigout,
  onAuthStateUpdate,
};

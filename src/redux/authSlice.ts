import { createSlice } from "@reduxjs/toolkit";
import type { User } from "@supabase/supabase-js";

interface IAuthSlice {
  user: User | null;
  isLoading: boolean;
}
const initialState: IAuthSlice = {
  user: null,
  isLoading: true,
};
const authSLice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      return state;
    },
  },
});

export const authAction = authSLice.actions;
export const authReduce = authSLice.reducer;

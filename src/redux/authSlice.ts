import { createSlice } from "@reduxjs/toolkit";
interface IAuthSlice {
  user: any;
}
const initialState: IAuthSlice = {
  user: null,
};
const authSLice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

export const authReduce = authSLice.reducer;

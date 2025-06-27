import { configureStore } from "@reduxjs/toolkit";
import { authReduce } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

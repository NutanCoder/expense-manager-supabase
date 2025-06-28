import { configureStore } from "@reduxjs/toolkit";
import { authReduce } from "./authSlice";
import { categoryReducer } from "./categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

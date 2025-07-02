import { configureStore } from "@reduxjs/toolkit";
import { authReduce } from "./authSlice";
import { categoryReducer } from "./categorySlice";
import { expenseListReducer } from "./expenseSlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
    category: categoryReducer,
    expenseList: expenseListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

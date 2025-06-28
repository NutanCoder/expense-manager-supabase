import { createSlice } from "@reduxjs/toolkit";
import type { IExpense } from "../types/expense";

interface IExpenseSlice {
  expenses: IExpense[];
  loading: boolean;
}

const initialState: IExpenseSlice = {
  expenses: [],
  loading: true,
};

const expenseSlice = createSlice({
  name: "ExpenseSlice",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
  },
});

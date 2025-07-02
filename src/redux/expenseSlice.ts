import { createSlice } from "@reduxjs/toolkit";
import type { IExpense } from "../types/expense";
import type { ICategory } from "../types/category";

interface IExpenseSlice {
  category: ICategory | null;
  expenses: IExpense[];
  isLastPage: boolean;
  loading: boolean;
  page: number;
}

const initialState: IExpenseSlice = {
  expenses: [],
  isLastPage: true,
  category: null,
  loading: true,
  page: 1,
};

const expenseListSlice = createSlice({
  name: "ExpenseSlice",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
      return state;
    },
    setIsLastPage: (state, action) => {
      state.isLastPage = action.payload;
      return state;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.loading = false;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      return state;
    },
  },
});

export const expenseListAction = expenseListSlice.actions;
export const expenseListReducer = expenseListSlice.reducer;

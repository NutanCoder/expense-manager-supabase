import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
  isLastPage: false,
  category: null,
  loading: true,
  page: 1,
};

const expenseListSlice = createSlice({
  name: "ExpenseSlice",
  initialState,
  reducers: {
    appendEnpenses: (state, action: PayloadAction<IExpense[]>) => {
      const old = Array.from(state.expenses);
      const newd = action.payload;
      state.expenses = [...old, ...newd];
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

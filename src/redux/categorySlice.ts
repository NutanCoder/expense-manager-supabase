import { createSlice } from "@reduxjs/toolkit";
import type { ICategory } from "../types/category";

interface ICategorySlice {
  categories: ICategory[];
  loading: boolean;
  isLoaded: boolean;
}

const initialState: ICategorySlice = {
  categories: [],
  loading: true,
  isLoaded: false,
};

const categorySlice = createSlice({
  name: "CategorySlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
      state.isLoaded = true;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
  },
});

export const categoryAction = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;

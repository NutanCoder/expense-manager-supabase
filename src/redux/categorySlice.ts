import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ICategory } from "../types/category";
import { categoryService } from "../services/CategoryService";

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
  name: "category",
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
  extraReducers(builder) {
    return builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (page: number) => {
    const { data } = await categoryService.getAllCategory(page);
    return data;
  }
);

export const categoryAction = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;

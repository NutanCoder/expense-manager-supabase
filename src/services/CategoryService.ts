import type {
  CategoriesResponse,
  CategoryDeleteResponse,
  CategoryResponse,
  ICreateCategory,
} from "../types/category";
import { supabaseClient } from "../utils/supbase";

const TABLE_NAME = "categories";

async function createCategory(
  payload: ICreateCategory
): Promise<CategoryResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .insert(payload)
    .select();
  if (error) {
    return { data: null, error: error };
  } else {
    const item = data[0];
    return { data: item, error: null };
  }
}

async function getAllCategory(page: number): Promise<CategoriesResponse> {
  const limit = 10;
  const start = (page - 1) * limit + 1;
  const end = page * limit;

  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select()
    .order("id", { ascending: false })
    .range(start, end);
  if (error) {
    return { data: [], error: error };
  } else {
    return { data: data, error: null };
  }
}

async function getCategoryById(id: string): Promise<CategoryResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select()
    .eq("id", id);
  if (error) {
    return { data: null, error: error };
  }
  if (data.length == 0) {
    return { data: null, error: "No Entry found with id" + id };
  } else {
    const item = data[0];
    return { data: item, error: null };
  }
}

async function updateCategoryById(
  id: string,
  payload: ICreateCategory
): Promise<CategoryResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .update(payload)
    .eq("id", id)
    .select();
  if (error) {
    return { data: null, error: error };
  } else if (data.length == 0) {
    return { data: null, error: "No Entry found with id" + id };
  } else {
    const item = data[0];
    return { data: item, error: null };
  }
}

async function deleteCategory(id: string): Promise<CategoryDeleteResponse> {
  const { error } = await supabaseClient.from(TABLE_NAME).delete().eq("id", id);
  if (error) {
    return { data: null, error: error };
  } else {
    return { data: true, error: null };
  }
}

export const categoryService = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategory,
};

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
    return { data: null, error: error.message };
  } else {
    const item = data[0];
    return { data: item, error: null };
  }
}

async function getAllCategory(page: number): Promise<CategoriesResponse> {
  const limit = 10;
  const from = (page - 1) * limit;
  const to = page * limit - 1;

  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select(
      `
      *,
      profile (
        id,
        full_name,
        avatar_url,
        email
      )
    `
    )
    .order("created_at", { ascending: false })
    .range(from, to);
  if (error) {
    return { data: [], error: error.message };
  } else {
    return { data: data, error: null };
  }
}

async function getCategoryById(id: string): Promise<CategoryResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select(
      `
        *,
        profile (
          id,
          full_name,
          avatar_url,
          email
        )
      `
    )
    .eq("id", id);
  if (error) {
    return { data: null, error: error.message };
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

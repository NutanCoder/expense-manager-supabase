import type {
  ExpenseDeleteResponse,
  ExpenseResponse,
  ExpensesResponse,
  ICreateExpense,
} from "../types/expense";
import { supabaseClient } from "../utils/supbase";

const TABLE_NAME = "expenses";

async function createExpense(
  payload: ICreateExpense
): Promise<ExpenseResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .insert(payload)
    .select();
  if (error) {
    return { error: error, data: null };
  }
  if (data.length == 0) {
    return { error: "Failed to create", data: null };
  } else {
    return { error: null, data: data[0] };
  }
}

async function getAllByCategoryId(
  id: string,
  page: number
): Promise<ExpensesResponse> {
  const limit = 10;
  const start = (page - 1) * limit + 1;
  const end = page * limit;
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
    .eq("cateogory_id", id)
    .range(start, end);
  if (error) {
    return { error: error.message, data: [] };
  } else {
    return { error: null, data: data };
  }
}

async function getExpenseById(id: string): Promise<ExpenseResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select()
    .eq("id", id);
  if (error) {
    return { error: error, data: null };
  }
  if (data.length == 0) {
    return { error: "Something went wrong", data: null };
  } else {
    return { error: null, data: data[0] };
  }
}

async function updateExpenseById(
  id: string,
  payload: ICreateExpense
): Promise<ExpenseResponse> {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .update(payload)
    .eq("id", id)
    .select();
  if (error) {
    return { error: error, data: null };
  }
  if (data.length == 0) {
    return { error: "Something went wrong", data: null };
  } else {
    return { error: null, data: data[0] };
  }
}

async function deleteExpense(id: string): Promise<ExpenseDeleteResponse> {
  const { error } = await supabaseClient
    .from(TABLE_NAME)
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    return { error: error, data: null };
  }
  return { error: null, data: true };
}

export const expenseService = {
  createExpense,
  getAllByCategoryId,
  getExpenseById,
  updateExpenseById,
  deleteExpense,
};

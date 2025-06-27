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

async function getAllExpense(page: number): Promise<ExpensesResponse> {
  const limit = 10;
  const start = (page - 1) * limit + 1;
  const end = page * limit;
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select()
    .order("id", { ascending: false })
    .range(start, end);
  if (error) {
    return { error: error, data: [] };
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
    return { error: null, data: data };
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
    return { error: null, data: data };
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

export const categoryService = {
  createExpense,
  getAllExpense,
  getExpenseById,
  updateExpenseById,
  deleteExpense,
};

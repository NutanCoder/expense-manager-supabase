import type { ServiceResponse } from "./response";

interface ICreateExpense {}

interface IExpense extends ICreateExpense {}

export type ExpenseResponse = ServiceResponse<IExpense | null>;
export type ExpensesResponse = ServiceResponse<IExpense[]>;
export type ExpenseDeleteResponse = ServiceResponse<boolean | null>;

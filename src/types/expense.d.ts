import type { ServiceResponse } from "./response";

interface ICreateExpense {
  amount: number;
  title: string;
  description?: string;
  image_url?: string;
  category_id: string;
}

interface IExpense extends ICreateExpense {
  id: string;
  user_id: string;
  profile?: IProfile;
  updated_at: string;
  created_at: string;
}

export type ExpenseResponse = ServiceResponse<IExpense | null>;
export type ExpensesResponse = ServiceResponse<IExpense[]>;
export type ExpenseDeleteResponse = ServiceResponse<boolean | null>;

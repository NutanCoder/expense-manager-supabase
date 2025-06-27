import type { ServiceResponse } from "./response";

interface ICreateCategory {
  name: string;
}

interface ICategory extends ICreateCategory {
  id: string;
  updated_at: string;
  created_at: string;
}

export type CategoryResponse = ServiceResponse<ICategory | null>;
export type CategoriesResponse = ServiceResponse<ICategory[]>;
export type CategoryDeleteResponse = ServiceResponse<boolean | null>;

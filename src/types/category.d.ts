import type { IProfile } from "./profile";
import type { ServiceResponse } from "./response";

interface ICreateEditCategory {
  name: string;
  image_url?: string;
  color?: string;
  description: string;
}

type ICreateCategory = ICreateEditCategory;

interface ICategory extends ICreateEditCategory {
  id: string;
  user_id: string;
  profile?: IProfile;
  updated_at: string;
  created_at: string;
}

export type CategoryResponse = ServiceResponse<ICategory | null>;
export type CategoriesResponse = ServiceResponse<ICategory[]>;
export type CategoryDeleteResponse = ServiceResponse<boolean | null>;

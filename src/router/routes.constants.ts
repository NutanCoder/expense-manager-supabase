export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CATEGORIES: {
    LIST: "/categories",
    CREATE: "/categories/create",
    DETAILS: (id: string) => `/categories/${id}`,
    EDIT: (id: string) => `/categories/${id}/edit`,
  },
  EXPENSES: {
    CREATE: "/expenses/create",
    EDIT: (id: string) => `/expenses/${id}/edit`,
  },
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  ERROR: {
    NOT_FOUND: "*",
  },
} as const;

export type Routes = typeof ROUTES;

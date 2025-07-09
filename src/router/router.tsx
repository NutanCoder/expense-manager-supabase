import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import HomePage from "@/features/home/HomePage";
import ProfilePage from "@/features/profiles/pages/ProfilePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import CreateCategory from "../features/category/pages/CreateCategory";
import AppLayout from "@/components/layouts/AppLayout";
import ErrorPage from "../features/Errors/ErrorPage";
import ListExpenses from "@/features/expense/ListExpenses";
import CategoryListPage from "../features/category/pages/CategoryListPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import CreateExpense from "../features/expense/CreateExpense";
import EditCategory from "../features/category/pages/EditCategory";
import EditExpense from "../features/expense/EditExpense";
import { ROUTES } from "./routes.constants";
import type { ReactElement } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

const withProtectedRoute = (element: ReactElement): ReactElement => (
  <ProtectedRoute>{element}</ProtectedRoute>
);

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    errorElement: <ErrorPage type="500" />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PROFILE,
        element: withProtectedRoute(<ProfilePage />),
      },
      {
        path: ROUTES.CATEGORIES.LIST,
        element: withProtectedRoute(<CategoryListPage />),
      },
      {
        path: ROUTES.CATEGORIES.CREATE,
        element: withProtectedRoute(<CreateCategory />),
      },
      {
        path: ROUTES.CATEGORIES.DETAILS(":id"),
        element: <ListExpenses />,
      },
      {
        path: ROUTES.CATEGORIES.EDIT(":id"),
        element: withProtectedRoute(<EditCategory />),
      },
      {
        path: ROUTES.EXPENSES.CREATE,
        element: withProtectedRoute(<CreateExpense />),
      },
      {
        path: ROUTES.EXPENSES.EDIT(":id"),
        element: withProtectedRoute(<EditExpense />),
      },
      {
        path: ROUTES.ERROR.NOT_FOUND,
        element: <ErrorPage type="404" />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.AUTH.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

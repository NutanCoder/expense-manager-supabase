import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import CreateCategory from "./pages/Category/CreateCategory";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import ListExpenses from "./pages/Expense/ListExpenses";
import CategoryListPage from "./pages/Category/CategoryListPage";
import ProtectedRoute from "./features/ProtectedRoute";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import RegisterPage from "./pages/RegisterPage";
import CreateExpense from "./pages/Expense/CreateExpense";
import EditCategory from "./pages/Category/EditCategory";
import EditExpense from "./pages/Expense/EditExpense";

function AppRouting() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;
    html.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/categories" element={<CategoryListPage />} />
          <Route
            path="/categories/create"
            element={
              <ProtectedRoute>
                <CreateCategory />
              </ProtectedRoute>
            }
          />
          <Route path="/categories/:id" element={<ListExpenses />} />
          <Route path="/categories/:id/edit" element={<EditCategory />} />
          <Route path="/expenses/:id/edit" element={<EditExpense />} />
          <Route
            path="/expenses/create"
            element={
              <ProtectedRoute>
                <CreateExpense />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage type="404" />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import CreateCategory from "./pages/Category/CreateCategory";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import ListExpenses from "./pages/Expense/ListExpenses";
import CategoryListPage from "./pages/Category/CategoryListPage";

function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<CategoryListPage />} />
          <Route path="/categories/create" element={<CreateCategory />} />
          <Route path="/categories/:id" element={<ListExpenses />} />
          <Route path="*" element={<ErrorPage type="404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;

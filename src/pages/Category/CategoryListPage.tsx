import { useEffect, useState } from "react";
import type { ICategory } from "../../types/category";
import { categoryService } from "../../services/CategoryService";
import { toast } from "react-toastify";
import CategoryCard from "./components/CategoryCard";
import StyledLink from "../../components/StyledLink";
import Modal from "../../components/Modal";
import LoginForm from "../../features/LoginFeature";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Button from "../../components/Button";
import type { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

function CategoryListPage() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const authState = useSelector((root: RootState) => root.auth);
  const isLoggedIn = authState.user != null;
  const [categories, setCategories] = useState<ICategory[]>([]);
  const page = 1;

  const openLoginForm = () => {
    setIsLoginOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginOpen(false);
  };

  const onLoginSuccess = (_: User) => {
    navigate("/categories/create");
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      const { data, error } = await categoryService.getAllCategory(page);
      if (data) {
        setCategories(data);
      } else {
        toast.error(error);
      }
    };
    fetchAllCategories();
  }, []);

  return (
    <div className="container mx-auto my-2">
      <div className="flex justify-end my-2">
        {isLoggedIn && (
          <StyledLink to="/categories/create" variant="primary">
            Create Category
          </StyledLink>
        )}
        {!isLoggedIn && (
          <Button onClick={openLoginForm} variant="primary">
            Create Category
          </Button>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {categories.map((category) => {
          return <CategoryCard data={category} key={category.id} />;
        })}
      </div>
      <Modal title="Login Form" isOpen={isLoginOpen} onClose={closeLoginForm}>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </Modal>
    </div>
  );
}

export default CategoryListPage;

import { useCallback, useEffect, useState } from "react";
import { categoryService } from "../../services/CategoryServices";
import { toast } from "react-toastify";
import CategoryCard from "./components/CategoryCard";
import StyledLink from "../../components/StyledLink";
import Modal from "../../components/Modal";
import LoginFeature from "../../features/LoginFeature";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import MasterLoading from "../../components/MasterLoading";
import { categoryAction } from "../../redux/categorySlice";

function CategoryListPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const authState = useSelector((root: RootState) => root.auth);
  const categoryState = useSelector((root: RootState) => root.category);
  const loading = categoryState.loading;
  const categories = categoryState.categories;
  const isLoggedIn = authState.user != null;
  const page = 1;

  const openLoginForm = () => {
    setIsLoginOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginOpen(false);
  };

  const onLoginSuccess = () => {
    navigate("/categories/create");
  };

  const fetchAllCategories = useCallback(async () => {
    const action1 = categoryAction.setLoading(true);
    dispatch(action1);
    const { data, error } = await categoryService.getAllCategory(page);
    const action2 = categoryAction.setLoading(false);
    dispatch(action2);
    if (data) {
      const action = categoryAction.setCategory(data);
      dispatch(action);
    } else {
      toast.error(error);
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (categoryState.isLoaded) return;
    fetchAllCategories();
  }, [categoryState.isLoaded, fetchAllCategories]);

  if (loading) {
    return <MasterLoading />;
  }

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
        <LoginFeature onLoginSuccess={onLoginSuccess} />
      </Modal>
    </div>
  );
}

export default CategoryListPage;

import { useEffect, useState } from "react";
import type { ICategory } from "../../types/category";
import { categoryService } from "../../services/CategoryService";
import { toast } from "react-toastify";
import CategoryCard from "./components/CategoryCard";
import Button from "../../components/Button";
import StyledLink from "../../components/StyledLink";

function CategoryListPage() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const page = 1;

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
        <StyledLink to="/categories/create" variant="primary">
          Create Category
        </StyledLink>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => {
          return <CategoryCard data={category} key={category.id} />;
        })}
      </div>
    </div>
  );
}

export default CategoryListPage;

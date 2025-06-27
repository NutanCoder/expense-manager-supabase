import { useEffect, useState } from "react";
import type { ICategory } from "../../types/category";
import { categoryService } from "../../services/CategoryService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import MasterLoading from "../../components/MasterLoading";

function ListExpenses() {
  const { id } = useParams();
  const [category, setCategory] = useState<ICategory | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      if (id == undefined) return;
      setLoading(true);
      const { data, error } = await categoryService.getCategoryById(id);
      // setLoading(false);
      if (data) {
        setCategory(data);
      } else {
        toast.error(error);
      }
    };
    fetchCategory();
  }, []);

  if (loading) {
    return <MasterLoading />;
  }

  return <div>{JSON.stringify(category)}</div>;
}

export default ListExpenses;

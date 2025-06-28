import { useEffect, useState } from "react";
import type { ICategory } from "../../types/category";
import { categoryService } from "../../services/CategoryService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import MasterLoading from "../../components/MasterLoading";
import CategoryCard from "../Category/components/CategoryCard";
import type { IExpense } from "../../types/expense";
import { expenseService } from "../../services/ExpenseService";
import ExpenseCard from "./components/ExpenseCard";
import Button from "../../components/Button";

function ListExpenses() {
  const { id } = useParams();
  const [category, setCategory] = useState<ICategory | null>();
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      if (id == undefined) return;
      setLoading(true);
      const { data, error } = await categoryService.getCategoryById(id);
      setLoading(false);
      if (data) {
        setCategory(data);
      } else {
        toast.error(error);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchAllExpenses = async () => {
      if (id == null) return;
      const { data, error } = await expenseService.getAllByCategoryId(id, page);
      if (error) {
        toast.error(error);
      } else {
        if (data.length == 0) {
          setIsLastPage(true);
        }
        setExpenses([...expenses, ...data]);
      }
    };
    fetchAllExpenses();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <MasterLoading />;
  }

  return (
    <div className="mx-auto container sm:my-4">
      {category && <CategoryCard data={category} />}

      {expenses.map((expense) => {
        return <ExpenseCard data={expense} key={expense.id} />;
      })}
      {!isLastPage && (
        <Button type="button" onClick={nextPage}>
          Load More
        </Button>
      )}
      {isLastPage && <p>No More Page to Load</p>}
    </div>
  );
}

export default ListExpenses;

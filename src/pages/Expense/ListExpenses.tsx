import { useCallback, useEffect } from "react";
import { categoryService } from "../../services/CategoryServices";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import MasterLoading from "../../components/MasterLoading";
import CategoryCard from "../Category/components/CategoryCard";
import ExpenseCard from "./components/ExpenseCard";
import Button from "../../components/Button";
import StyledLink from "../../components/StyledLink";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { expenseListAction } from "../../redux/expenseSlice";
import { expenseService } from "../../services/ExpenseServices";

function ListExpenses() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const expenseListState = useSelector((root: RootState) => root.expenseList);
  const category = expenseListState.category;
  const loading = expenseListState.loading;
  const page = expenseListState.page;
  const expenses = expenseListState.expenses;
  const isLastPage = expenseListState.isLastPage;

  const fetchAllExpenses = useCallback(
    async (id: string, page: number) => {
      if (id == null) return;
      const { data, error, isLastPage } =
        await expenseService.getAllByCategoryId(id, page);
      if (error) {
        toast.error(error);
      } else {
        const action1 = expenseListAction.setIsLastPage(isLastPage);
        dispatch(action1);
        const action = expenseListAction.appendEnpenses(data);
        dispatch(action);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const fetchCategory = async () => {
      if (id == undefined) return;
      const action1 = expenseListAction.setLoading(true);
      dispatch(action1);
      const { data, error } = await categoryService.getCategoryById(id);
      const action2 = expenseListAction.setLoading(false);
      dispatch(action2);
      if (data) {
        const action = expenseListAction.setCategory(data);
        dispatch(action);
      } else {
        toast.error(error);
      }
    };
    fetchCategory();
  }, [dispatch, id]);

  useEffect(() => {
    if (id == null) return;
    console.log(`useEffect of fetchAllExpenses ID:${id}, Page: ${page}`);
    fetchAllExpenses(id, page);
  }, [page, id, fetchAllExpenses]);

  const nextPage = () => {
    const action = expenseListAction.setPage(page + 1);
    dispatch(action);
  };

  if (loading) {
    return <MasterLoading />;
  }

  return (
    <div className="mx-auto container sm:my-4">
      {category && <CategoryCard data={category} />}
      {/* Create expense button */}
      <div className="my-4 flex justify-end">
        <StyledLink to="/expenses/create" variant="secondary">
          Create Expense
        </StyledLink>
      </div>
      {expenses.map((expense) => {
        return <ExpenseCard data={expense} key={expense.id} />;
      })}
      <div className="flex justify-center">
        {!isLastPage && (
          <Button type="button" onClick={nextPage}>
            Load More
          </Button>
        )}
        {isLastPage && <p>No More Page to Load</p>}
      </div>
    </div>
  );
}

export default ListExpenses;

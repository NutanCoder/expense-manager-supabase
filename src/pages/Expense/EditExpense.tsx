import { useState, type ChangeEvent, type FormEvent, useEffect } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import type { ICreateEditExpense } from "../../types/expense";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { expenseService } from "../../services/ExpenseService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchCategories } from "../../redux/categorySlice";

function EditExpense() {
  const dispatch = useDispatch<AppDispatch>();
  const categoryState = useSelector((root: RootState) => root.category);
  const categories = categoryState.categories;
  const { id } = useParams();
  const [payload, setPayload] = useState<ICreateEditExpense>({
    title: "",
    description: "",
    amount: 0,
    category_id: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (id == null) return;
    expenseService.getExpenseById(id).then(({ data, error }) => {
      if (data) return setPayload(data);
      if (error) return toast.error(error);
    });
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id == undefined) return;
    const { data, error } = await expenseService.updateExpenseById(id, payload);
    if (data) {
      setPayload(data);
    } else {
      toast.error(error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedPayload = {
      ...payload,
      [name]: value,
    };
    setPayload(updatedPayload);
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex">
        <div className="w-2/3"></div>
        <div className="w-1/3">
          <form
            onSubmit={submitHandler}
            className="border-gray-200 border-2 shadow py-4 px-4 rounded-2xl"
          >
            <h1 className="mb-4 text-xl font-bold">Edit Expense</h1>

            <InputField
              label="Title"
              type="text"
              name="title"
              value={payload.title}
              onChange={handleChange}
            />
            <InputField
              label="Amount"
              type="number"
              name="amount"
              value={payload.amount}
              onChange={handleChange}
            />
            <InputField
              label="Description"
              type="text"
              name="description"
              value={payload.description}
              onChange={handleChange}
            />
            <div className="mb-4 w-full">
              <label htmlFor="category_id" className="block mb-1 font-medium">
                Category
              </label>
              <select
                name="category_id"
                id="category_id"
                value={payload.category_id}
                onChange={handleChange}
                className="border rounded px-3 py-2 outline-none w-full"
              >
                <option value="">Select Category</option>
                {categories.map((category) => {
                  return <option value={category.id}>{category.name}</option>;
                })}
              </select>
            </div>
            {/* <InputField label="Image URL" /> */}
            <Button type="submit" className="w-full">
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditExpense;

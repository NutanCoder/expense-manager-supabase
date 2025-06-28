import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ICreateExpense } from "../../types/expense";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { expenseService } from "../../services/ExpenseService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateExpense() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState<ICreateExpense>({
    amount: 0,
    title: "",
    category_id: "877ceb25-955b-4670-a02b-0c3e602ea786",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedPayload = {
      ...payload,
      [name]: value,
    };
    setPayload(updatedPayload);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await expenseService.createExpense(payload);
    if (data) {
      toast.success("Created");
      navigate(`/categories/${data.category_id}`);
    } else {
      toast.error(error);
    }
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
            <h1 className="mb-4 text-xl font-bold">Create Expense</h1>

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

            {/* <InputField label="Image URL" /> */}
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExpense;

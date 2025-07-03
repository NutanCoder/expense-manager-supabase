import { useState, type ChangeEvent, type FormEvent, useEffect } from "react";
import type { ICreateEditExpense } from "../../types/expense";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { expenseService } from "../../services/ExpenseServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { type AppDispatch, type RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/categorySlice";
import { supabaseClient } from "../../utils/supbase";

function CreateExpense() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const categoryState = useSelector((root: RootState) => root.category);
  const categories = categoryState.categories;
  const [payload, setPayload] = useState<ICreateEditExpense>({
    amount: 0,
    title: "",
    category_id: "",
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    dispatch(fetchCategories(1));
  }, [dispatch]);

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

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const image_url = await uploadImage();
    if (!image_url) return;
    const { data, error } = await expenseService.createExpense({
      ...payload,
      image_url: image_url,
    });
    if (data) {
      toast.success("Created");
      navigate(`/categories/${data.category_id}`);
    } else {
      toast.error(error);
    }
  };

  const uploadImage = async (): Promise<string | undefined> => {
    if (file == null) return undefined;

    const filePath = `${file.name}`;

    const { error } = await supabaseClient.storage
      .from("invoices")
      .upload(filePath, file);

    console.log({ error });
    if (error) return undefined;

    const { data } = supabaseClient.storage
      .from("invoices")
      .getPublicUrl(filePath);
    console.log({ data });

    return data.publicUrl;
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
            <div className="mb-4 w-full">
              <label htmlFor="category_id" className="block mb-1 font-medium">
                Category
              </label>
              <select
                name="category_id"
                id="category_id"
                onChange={handleChange}
                className="border rounded px-3 py-2 outline-none w-full"
              >
                <option value="">Select Category</option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="image_url" className="block mb-1 font-medium">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                name="image_url"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="border rounded px-3 py-2 outline-none w-full"
              />
            </div>

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

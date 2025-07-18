import { useState, type FormEvent, type ChangeEvent } from "react";
import InputField from "../../../components/InputField";
import type { ICreateEditCategory } from "../../../types/category";
import Button from "../../../components/Button";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorUnExpected } from "../../../components/errors";
import { categoryService } from "@/features/category/services/CategoryServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { fetchCategories } from "@/redux/categorySlice";

function CreateCategory() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const [payload, setPayload] = useState<ICreateEditCategory>({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await categoryService.createCategory(payload);
    setLoading(false);
    if (error) {
      toast.error(error);
    } else {
      dispatch(fetchCategories(1));
      toast.success("Created Successfully");
      navigation(`/categories/${data?.id}`);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const updatedPayload = {
      ...payload,
      [name]: value,
    };
    setPayload(updatedPayload);
  };

  return (
    <ErrorBoundary fallback={<ErrorUnExpected />}>
      <div className="container mx-auto max-w-md px-4 py-10">
        <form className="form-container" onSubmit={submitHandler}>
          <h2 className="text-2xl font-semibold mb-4">Create Category</h2>

          <InputField
            name="name"
            label="Category Name"
            value={payload.name}
            type="text"
            placeholder="Enter Category Name"
            onChange={changeHandler}
          />

          <InputField
            name="description"
            label="Category Description"
            value={payload.description}
            type="text"
            placeholder="Enter Category Description"
            onChange={changeHandler}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            Create
          </Button>
        </form>
      </div>
    </ErrorBoundary>
  );
}

export default CreateCategory;

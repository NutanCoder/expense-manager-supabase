import { useState, type FormEvent, type ChangeEvent } from "react";
import InputField from "../../components/InputField";
import type { ICreateEditCategory } from "../../types/category";
import Button from "../../components/Button";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorUnExpected } from "../../components/errors";
import { categoryService } from "../../services/CategoryService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateCategory() {
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
        <form
          className="border-2 border-gray-400 rounded-xl p-6 space-y-4"
          onSubmit={submitHandler}
        >
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

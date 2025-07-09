import { useState, type FormEvent, type ChangeEvent, useEffect } from "react";
import type { ICreateEditCategory } from "../../../types/category";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorUnExpected } from "../../../components/errors";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import { categoryService } from "@/features/category/services/CategoryServices";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditCategory() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<ICreateEditCategory>({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (id == null) return;
    categoryService.getCategoryById(id).then(({ data, error }) => {
      if (data != null) setPayload(data);
      else toast.error(error);
    });
  }, [id]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id == undefined) return;
    setLoading(true);
    const { data, error } = await categoryService.updateCategoryById(
      id,
      payload
    );
    setLoading(false);
    if (data) {
      setPayload(data);
    } else {
      toast.error(error);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
          <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>

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
            Update
          </Button>
        </form>
      </div>
    </ErrorBoundary>
  );
}

export default EditCategory;

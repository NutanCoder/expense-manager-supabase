import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import MasterLoading from "../../../components/MasterLoading";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import type { ICreateProfile } from "../../../types/profile";
import { profileService } from "../services/ProfileServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useSelector((root: RootState) => root.auth);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<ICreateProfile>({
    email: "",
    full_name: "",
    avatar_url: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const id = user?.id;

  const getProfile = useCallback(async () => {
    if (user == null) return;
    setLoading(true);
    const { data, error } = await profileService.getProfileById(user.id);
    setLoading(false);
    if (error) {
      toast.error(error);
      return;
    }
    if (!data) return;
    setPayload(data);
  }, [user]);

  useEffect(() => {
    getProfile();
  }, [getProfile, id]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedPayload = {
      ...payload,
      [name]: value,
    };
    setPayload(updatedPayload);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let avatar_url = payload.avatar_url;
    if (file != null) {
      const { data, error } = await profileService.uploadAvatar(file);
      if (data != null) {
        avatar_url = data;
      } else {
        toast.error(error);
        return;
      }
    }
    if (id == undefined) return;
    const updatedPayload = {
      ...payload,
      avatar_url: avatar_url,
    };
    const { data, error } = await profileService.updateProfileById(
      id,
      updatedPayload
    );
    if (data) {
      toast.success("Profile Edited Successfully");
      setFile(null);
      setPayload(data);
      navigate("/profile");
    } else {
      toast.error(error);
    }
  };

  if (loading) {
    return <MasterLoading />;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <InputField
            value={payload?.email}
            label="Email"
            name="email"
            onChange={handleInput}
          />
          <InputField
            value={payload?.full_name}
            label="Full Name"
            name="full_name"
            onChange={handleInput}
          />
          <div className="mb-4 w-full">
            <label htmlFor="avatar_url" className="block mb-1 font-medium">
              Avatar
            </label>
            <div className="flex">
              {file && (
                <div>
                  <p className="text-sm text-gray-600">Preview:</p>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Selected"
                    className="h-40 rounded  border shadow mb-2"
                  />
                </div>
              )}
              {payload.avatar_url && !file && (
                <div>
                  <p className="text-sm text-gray-600">Current Image:</p>
                  <img
                    src={payload.avatar_url}
                    alt="Selected"
                    className="h-40 rounded border shadow mb-2"
                  />
                </div>
              )}
            </div>
            <input
              type="file"
              name="avatar_url"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="border rounded px-3 py-2 outline-none w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;

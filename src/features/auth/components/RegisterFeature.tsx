import { useState, type FormEvent } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { authService } from "@/features/auth/services/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterFeature() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authService.register(email, password);
    setLoading(false);
    if (data) {
      navigate("/profile");
    } else {
      toast.error(error);
    }
  };

  return (
    <div className="py-4">
      <h1 className="font-bold text-2xl mb-4">Register Form</h1>
      <form onSubmit={handleRegister}>
        <InputField
          placeholder="Enter Your Email"
          label="Email:"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          placeholder="Enter Your Password"
          label="Password:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Registering" : "Register"}
        </Button>
      </form>
    </div>
  );
}

export default RegisterFeature;

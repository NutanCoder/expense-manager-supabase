import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "../services/AuthService";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/authSlice";
import Button from "../components/Button";
import type { User } from "@supabase/supabase-js";

interface ILoginForm {
  onLoginSuccess?: (user: User) => void;
}

function LoginFeature(props: ILoginForm) {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const onLoginSuccess = props.onLoginSuccess;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error, data } = await authService.sigin(email, password);
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (data) {
      const event = authAction.setUser(data);
      disptach(event);
      toast.success("Login Success");
      if (onLoginSuccess) {
        onLoginSuccess(data);
      } else {
        navigate("/profile");
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {!onLoginSuccess && <h2 className="text-2xl font-bold">Login</h2>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default LoginFeature;

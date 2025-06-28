import { useState, useEffect } from "react";
import { type User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/AuthService";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onPageLoad();
    const { data } = authService.onAuthStateUpdate(onAuthChange);
    return () => data.unsubscribe();
  }, []);

  const onAuthChange = (user: User | undefined) => {
    if (user == undefined) {
      navigate("/login");
    } else {
      setUser(user);
    }
  };

  const onPageLoad = async () => {
    const { data } = await authService.getUser();
    if (data == null) {
      navigate("/login");
    } else {
      setUser(data);
    }
  };

  const logout = () => {
    authService.sigout();
  };

  if (!user) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        Logged in!
        <p>Email :{user.email}</p>
        <button onClick={logout}>logout</button>
      </div>
    );
  }
}

export default ProfilePage;

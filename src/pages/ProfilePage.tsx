import { authService } from "../services/AuthService";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function ProfilePage() {
  const { user } = useSelector((root: RootState) => root.auth);

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

import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import MasterLoading from "../components/MasterLoading";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: React.ReactNode;
}

function ProtectedRoute(props: IProtectedRoute) {
  const authState = useSelector((root: RootState) => root.auth);
  const isLoading = authState.isLoading;
  const user = authState.user;
  if (isLoading) {
    return <MasterLoading />;
  }
  if (user) {
    return props.children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;

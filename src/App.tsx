import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import AppRouting from "./AppRouting";
import { ErrorUnExpected } from "./components/errors";
import { useEffect } from "react";
import { authService } from "./services/AuthService";
import type { User } from "@supabase/supabase-js";
import { authAction } from "./redux/authSlice";

function App() {
  const disptach = useDispatch();

  useEffect(() => {
    onPageLoad();
    const { data } = authService.onAuthStateUpdate(onAuthChange);
    return () => data.unsubscribe();
  }, []);

  const onAuthChange = (user: User | undefined) => {
    const event = authAction.setUser(user);
    disptach(event);
  };

  const onPageLoad = async () => {
    const { data } = await authService.getUser();
    const event = authAction.setUser(data);
    disptach(event);
  };

  return (
    <ErrorBoundary fallback={<ErrorUnExpected />}>
      <AppRouting />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import AppRouting from "./AppRouting";
import { ErrorUnExpected } from "./components/errors";
import { useCallback, useEffect } from "react";
import { authService } from "./services/AuthService";
import type { User } from "@supabase/supabase-js";
import { authAction } from "./redux/authSlice";

function App() {
  const disptach = useDispatch();

  const onAuthChange = useCallback(
    (user: User | undefined) => {
      const event = authAction.setUser(user);
      disptach(event);
    },
    [disptach]
  );

  const onPageLoad = useCallback(async () => {
    const { data } = await authService.getUser();
    const event = authAction.setUser(data);
    disptach(event);
  }, [disptach]);

  useEffect(() => {
    onPageLoad();
    const { data } = authService.onAuthStateUpdate(onAuthChange);
    return () => data.unsubscribe();
  }, [onAuthChange, onPageLoad]);

  return (
    <ErrorBoundary fallback={<ErrorUnExpected />}>
      <AppRouting />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;

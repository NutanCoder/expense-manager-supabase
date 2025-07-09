import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorUnExpected } from "@/components/errors";
import { useCallback, useEffect } from "react";
import { authService } from "@/features/auth/services/AuthService";
import type { User } from "@supabase/supabase-js";
import { authAction } from "@/redux/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";

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
      <RouterProvider router={router} />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;

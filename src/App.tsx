import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;

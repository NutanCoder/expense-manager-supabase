import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";
import AppRouting from "./AppRouting";
import { ErrorUnExpected } from "./components/errors";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorUnExpected />}>
      <Provider store={store}>
        <AppRouting />
        <ToastContainer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;

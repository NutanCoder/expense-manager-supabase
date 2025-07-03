import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginFeature from "../../src/features/LoginFeature";
import { store } from "../../src/redux/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

describe("Login Feature Test", () => {
  it("render Login Form", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginFeature />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("renders error toast on login failure", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginFeature />
        </MemoryRouter>
        <ToastContainer />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter Email"), {
      target: { value: "nutan@gmail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter Password"), {
      target: { value: "abc" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Logging in...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Invalid login credentials")).toBeInTheDocument();
    });
  });

  it("renders success toast on login success", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginFeature />
        </MemoryRouter>
        <ToastContainer />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter Email"), {
      target: { value: "nutansingh159@gmail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter Password"), {
      target: { value: "nutansingh159@gmail.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Logging in...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Login Success")).toBeInTheDocument();
    });
  });
});

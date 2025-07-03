import "@testing-library/jest-dom";
import Button from "../../src/components/Button";
import { render, screen } from "@testing-library/react";

describe("Basic Button Render Test", () => {
  it("renders text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("color should be secondary", () => {
    render(<Button>Click Me</Button>);
    const element = screen.getByText("Click Me");
    expect(element.classList).toContain("bg-gray-700");
  });

  it("color should be primary", () => {
    render(<Button variant="primary">Click Me</Button>);
    const element = screen.getByText("Click Me");
    expect(element.classList).toContain("bg-yellow-400");
  });
});

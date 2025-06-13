import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it("renders header text", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("renders vite and react logos with links", () => {
    render(<App />);
    const viteLink = screen.getByRole("link", { name: /Vite logo/i });
    const reactLink = screen.getByRole("link", { name: /React logo/i });

    expect(viteLink).toHaveAttribute("href", "https://vite.dev");
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });
});

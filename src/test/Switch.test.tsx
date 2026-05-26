import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Switch } from "../components/Switch";

describe("Switch", () => {
  it("renders without crashing", () => {
    render(<Switch size="default" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders label text", () => {
    render(<Switch size="default" label="Dark mode" />);
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Switch size="default" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("is checked when defaultChecked is true", () => {
    render(<Switch size="default" defaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("is not checked by default", () => {
    render(<Switch size="default" />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("has aria-label when provided", () => {
    render(<Switch size="default" aria-label="Toggle theme" />);
    expect(
      screen.getByRole("checkbox", { name: "Toggle theme" })
    ).toBeInTheDocument();
  });
});

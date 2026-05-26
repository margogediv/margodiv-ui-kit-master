import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Rate } from "../components/Rate";

describe("Rate", () => {
  it("renders a radiogroup", () => {
    render(<Rate />);
    expect(screen.getByRole("radiogroup", { name: "Rating" })).toBeInTheDocument();
  });

  it("renders correct number of stars", () => {
    render(<Rate count={5} />);
    expect(screen.getAllByRole("radio")).toHaveLength(5);
  });

  it("renders custom count of stars", () => {
    render(<Rate count={10} />);
    expect(screen.getAllByRole("radio")).toHaveLength(10);
  });

  it("calls onChange when a star is clicked", () => {
    const onChange = vi.fn();
    render(<Rate onChange={onChange} />);
    fireEvent.click(screen.getAllByRole("radio")[2]);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn();
    render(<Rate disabled onChange={onChange} />);
    fireEvent.click(screen.getAllByRole("radio")[2]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("reflects checked state for defaultValue", () => {
    render(<Rate defaultValue={3} />);
    const stars = screen.getAllByRole("radio");
    expect(stars[0]).toHaveAttribute("aria-checked", "true");
    expect(stars[1]).toHaveAttribute("aria-checked", "true");
    expect(stars[2]).toHaveAttribute("aria-checked", "true");
    expect(stars[3]).toHaveAttribute("aria-checked", "false");
    expect(stars[4]).toHaveAttribute("aria-checked", "false");
  });

  it("stars are not keyboard-focusable when disabled", () => {
    render(<Rate disabled />);
    screen.getAllByRole("radio").forEach((star) => {
      expect(star).toHaveAttribute("tabindex", "-1");
    });
  });
});

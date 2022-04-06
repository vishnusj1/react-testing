import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Testing Counter Component", () => {
  test("counter is incremented on increment button click", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);

    expect(counter.textContent).toEqual("2");
  });

  test("counter is decremented on decrement button click", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByText("Decrement");

    userEvent.click(decrementBtn);
    userEvent.click(decrementBtn);

    expect(counter.textContent).toEqual("-2");
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders radical rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });
    userEvent.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

describe("Random Component", () => {
  it("click", () => {
    render(
      <div>
        <label htmlFor="checkbox">Check</label>
        <input id="checkbox" type="checkbox" />
      </div>
    );

    userEvent.click(screen.getByText("Check"));
    expect(screen.getByLabelText("Check")).toBeChecked();
  });

  it("double click", () => {
    const onChange = jest.fn();
    render(<input type="checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });
});

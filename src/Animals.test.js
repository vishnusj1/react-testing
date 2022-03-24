import React from "react";
import { render, screen } from "@testing-library/react";
import Animals from "./Animals";

it("list contains 5 animals", () => {
  render(<Animals/>)
  const listElements = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElements).toBeInTheDocument();
  expect(listElements).toHaveClass("animals");
  expect(listItems.length).toEqual(5);
});

import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import AsyncApp from "./AsyncApp";
import { act } from "react-dom/test-utils";

describe("Async App", () => {
  it("should display fetched data", async () => {
    const el = document.createElement("div");

    let resolve;
    function fetch() {
      return new Promise((_resolve) => {
        resolve = _resolve;
      });
    }

    act(() => {
      ReactDOM.render(<AsyncApp />, el);
    });

    expect(el.innerHTML).toBe("");
    await act(async () => {
      resolve(42);
    });
    expect(el.innerHTML).toBe("42");
  });
});

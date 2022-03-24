import React from "react";
import { render } from "@testing-library/react";
import Link from "./Link";

describe("Link Component", () => {
  it("renders the link", () => {
    const { container } = render(
      <Link page="http://www.facebook.com">Facebook</Link>
    );
    expect(container).toMatchSnapshot();
  });
});

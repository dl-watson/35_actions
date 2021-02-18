import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";
import { PostProvider } from "../../../providers/PostProvider";

describe("App component", () => {
  afterEach(() => cleanup());
  it("renders App", () => {
    const { asFragment } = render(
      <PostProvider>
        <App />
      </PostProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

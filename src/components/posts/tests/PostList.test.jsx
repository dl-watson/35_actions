import React from "react";
import { render, cleanup } from "@testing-library/react";
import PostList from "../PostList";
import { PostProvider } from "../../../providers/PostProvider";

describe("PostList component", () => {
  afterEach(() => cleanup());
  it("renders PostList", () => {
    const { asFragment } = render(
      <PostProvider>
        <PostList />
      </PostProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

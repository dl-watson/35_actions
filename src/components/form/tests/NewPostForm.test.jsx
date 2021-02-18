import React from "react";
import { render, cleanup } from "@testing-library/react";
import NewPostForm from "../NewPostForm";
import { PostProvider } from "../../../providers/PostProvider";

describe("NewPostForm component", () => {
  afterEach(() => cleanup());
  it("renders NewPostForm", () => {
    const { asFragment } = render(
      <PostProvider>
        <NewPostForm />
      </PostProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

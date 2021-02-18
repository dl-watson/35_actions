import React from "react";
import { render, cleanup } from "@testing-library/react";
import Post from "../Post";
import { PostProvider } from "../../../providers/PostProvider";

describe("Post component", () => {
  afterEach(() => cleanup());
  it("renders Post", () => {
    const { asFragment } = render(
      <PostProvider>
        <Post posts={{ id: Date.now(), title: "", body: "" }} />
      </PostProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

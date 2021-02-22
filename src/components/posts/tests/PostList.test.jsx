import React from "react";
import { render, cleanup } from "@testing-library/react";
import PostList from "../PostList";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("PostList component", () => {
  afterEach(() => cleanup());
  it("renders PostList", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

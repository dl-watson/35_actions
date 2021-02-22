import React from "react";
import { render, cleanup } from "@testing-library/react";
import NewPostForm from "../NewPostForm";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("NewPostForm component", () => {
  afterEach(() => cleanup());
  it("renders NewPostForm", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NewPostForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

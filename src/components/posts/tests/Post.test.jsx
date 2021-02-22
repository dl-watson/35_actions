import React from "react";
import { render, cleanup } from "@testing-library/react";
import Post from "../Post";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { MemoryRouter as Router } from "react-router-dom";

describe("Post component", () => {
  afterEach(() => cleanup());
  it("renders Post", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Post posts={{ id: Date.now(), title: "", body: "" }} />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

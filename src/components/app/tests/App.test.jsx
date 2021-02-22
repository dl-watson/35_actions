import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import "regenerator-runtime/runtime.js";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("App component", () => {
  afterEach(() => cleanup());
  it("renders App", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("tests that a user can enter a post's title and body, submit it and see the created post appear on the page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const titleInput = screen.getByPlaceholderText("Title...");
    const bodyInput = screen.getByPlaceholderText("Body...");
    const submit = screen.getByText("Submit");

    userEvent.type(titleInput, "One title");
    userEvent.type(bodyInput, "One body");
    userEvent.click(submit);

    return waitFor(() => {
      expect(screen.getByTestId("post-container")).not.toBeEmptyDomElement;
      expect(screen.getByTestId("title")).toHaveTextContent("One title");
    });
  });

  it("tests that a user can delete a created post", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await userEvent.click(screen.getByTestId("delete-icon"));

    return waitFor(() => {
      expect(screen.getByTestId("post-container")).toBeEmptyDomElement;
    });
  });
});

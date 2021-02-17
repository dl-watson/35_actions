import React from "react";
import { render } from "react-dom";
import App from "./components/app/App";
import { PostProvider } from "./providers/PostProvider";

render(
  <PostProvider>
    <App />
  </PostProvider>,
  document.getElementById("root")
);

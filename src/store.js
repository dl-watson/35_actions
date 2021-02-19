import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./reducers/postReducer";

export const store = createStore(postReducer, composeWithDevTools());

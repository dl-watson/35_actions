import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/index.js";

export const store = createStore(combineReducers, composeWithDevTools());

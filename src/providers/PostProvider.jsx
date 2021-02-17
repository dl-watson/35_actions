import React, { createContext, useReducer } from "react";
import { initialState, postReducer } from "../reducers/postReducer";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return <PostContext.Provider>{children}</PostContext.Provider>;
};

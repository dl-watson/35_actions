import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { initialState, postReducer } from "../reducers/postReducer";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={(state, dispatch)}>
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

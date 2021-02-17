import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { postReducer, initialState } from "../reducers/postReducer";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const useSelector = (selector) => {
  const { state } = useContext(PostContext);

  return selector(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(PostContext);
  return dispatch;
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

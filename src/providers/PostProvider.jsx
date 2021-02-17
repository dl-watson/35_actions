import React, { createContext } from "react";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  return <PostContext.Provider>{children}</PostContext.Provider>;
};

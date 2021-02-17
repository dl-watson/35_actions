import React, { createContext } from "react";

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  return <PostContext.Provider>{children}</PostContext.Provider>;
};

export default PostProvider;

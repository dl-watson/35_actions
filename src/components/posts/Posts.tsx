import React from "react";
import NewPostForm from "../form/NewPostForm";
import PostList from "./PostList";

export const Posts = () => {
  return (
    <div>
      <NewPostForm />
      <PostList />
    </div>
  );
};

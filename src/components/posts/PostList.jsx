import React from "react";
import uuid from "react-uuid";
import { useSelector } from "../../providers/PostProvider";
import { getPosts } from "../../selectors/postSelectors";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector(getPosts);

  const list = posts.map((post) => {
    return (
      <li key={uuid()}>
        <Post {...post} />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default PostList;

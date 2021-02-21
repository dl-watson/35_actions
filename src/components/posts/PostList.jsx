import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../selectors/postSelectors";
import Post from "./Post";

const PostList = () => {
  const { posts } = useSelector(getPosts);

  const list = posts.map((post, i) => {
    return (
      <li key={post.id}>
        <Post {...post} postIndex={i} />
      </li>
    );
  });
  return <ul data-testid="post-container">{list}</ul>;
};

export default PostList;

import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../selectors/postSelectors";
import Post from "./Post";

const PostList = () => {
  const { posts } = useSelector(getPosts);
  console.log("posts in post list", posts);

  const list = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post {...post} />
      </li>
    );
  });
  return <ul data-testid="post-container">{list}</ul>;
};

export default PostList;

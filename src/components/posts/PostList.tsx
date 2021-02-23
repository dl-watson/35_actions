import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../selectors/postSelectors";
import Post from "./Post";

type PostProps = {
  id: number, 
  title: string, 
  body: string,
}

const PostList = () => {
  const { posts } = useSelector(getPosts);

  const list = posts.map((post: PostProps, i: number) => {
    return (
      <li key={post.id}>
        <Post {...post} postIndex={i} />
      </li>
    );
  });
  return <ul data-testid="post-container">{list}</ul>;
};

export default PostList;

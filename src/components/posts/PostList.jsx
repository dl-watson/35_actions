import React from "react";
import { useSelector } from "../../providers/PostProvider";
import { getPosts } from "../../selectors/postSelectors";

const PostList = () => {
  const posts = useSelector(getPosts);
  console.log(posts);
  return <div>PostList</div>;
};

export default PostList;

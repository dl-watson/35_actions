import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "../../providers/PostProvider";

const Post = ({ title, body }) => {
  console.log(title, body);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(e.target);
    // dispatch(deletePost({...}))
  };

  return (
    <>
      <div>{title}</div>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;

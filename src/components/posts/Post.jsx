import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "../../providers/PostProvider";
import { deletePost } from "../../actions/postActions";

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <div onClick={handleClick}>{title}</div>
    </>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;

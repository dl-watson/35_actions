import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/commentActions";

export const Comment = ({ comment, commentIndex, postIndex }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(postIndex, commentIndex));
  };

  return (
    <div>
      <p>{comment}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired,
  postIndex: PropTypes.number.isRequired,
};

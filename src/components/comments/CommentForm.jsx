import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createComment } from "../../actions/commentActions";
import { updatePost } from "../../actions/postActions";

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    const { comment } = e.target.elements;

    dispatch(
      createComment({ [comment.id]: { id: Date.now(), text: comment.value } }),
      updatePost(comment.id, comment.value)
    );
  };
  return (
    <form onSubmit={handleComment}>
      <input name="comment" id={id} />
      <button>Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CommentForm;

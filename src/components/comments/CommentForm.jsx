import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createComment } from "../../actions/commentActions";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();

  const handleComment = (e) => {
    console.log(e.target.elements.comment);
    e.preventDefault();
    const { comment } = e.target.elements;

    dispatch(
      createComment({ [comment.id]: { id: Date.now(), text: comment.value } })
    );
  };
  return (
    <form onSubmit={handleComment}>
      <input name="comment" id={postId} />
      <button>Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentForm;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createComment } from "../../actions/commentActions";

const CommentForm = ({ postIndex }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    dispatch(createComment({ postIndex, id: Date.now(), comment }));
    setComment("");
  };

  return (
    <>
      <form onSubmit={handleComment}>
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
        <button>Comment</button>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  postIndex: PropTypes.number.isRequired,
};

export default CommentForm;

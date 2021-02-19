import React from "react";
import PropTypes from "prop-types";
import { getComments } from "../../selectors/commentSelectors";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { deleteComment } from "../../actions/commentActions";

const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(getComments);
  console.log("comments in comment list", comments);

  const handleDelete = (e) => {
    const { id } = e.target;
    dispatch(deleteComment({ id, postId }));
  };

  const commentList = comments.map((comment) => {
    return (
      <li key={comment[postId].id}>
        <div>{comment[postId].text}</div>
        <button onClick={handleDelete} id={comment[postId].id}>
          Delete
        </button>
      </li>
    );
  });

  return <>{commentList}</>;
};

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentList;

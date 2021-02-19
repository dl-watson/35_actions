import React from "react";
import PropTypes from "prop-types";
import { getComments } from "../../selectors/commentSelectors";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

const CommentList = ({ postId }) => {
  const { comments } = useSelector(getComments);

  const commentList = comments.map((comment) => {
    return (
      <li key={uuid()}>
        <div>{comment[postId].text}</div>
      </li>
    );
  });
  return <>{commentList}</>;
};

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentList;

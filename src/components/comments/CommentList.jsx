import React from "react";
import PropTypes from "prop-types";
import { getComments } from "../../selectors/commentSelectors";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

const CommentList = () => {
  const { comments } = useSelector(getComments);
  console.log("comments in post", comments);

  const commentList = comments.map((comment) => {
    return <li key={uuid()}>{comment.text}</li>;
  });
  return <>{commentList}</>;
};

CommentList.propTypes = {};

export default CommentList;

import React from "react";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export const Comments = ({ match }) => {
  const { index } = match.params;
  return (
    <div>
      <CommentList postIndex={Number(index)} />
      <CommentForm postIndex={Number(index)} />
    </div>
  );
};

Comments.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      index: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

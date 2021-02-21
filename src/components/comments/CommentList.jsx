import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { getComments } from "../../selectors/commentSelectors";
import { useSelector } from "react-redux";
import { Comment } from "./Comment";
import { getPosts } from "../../selectors/postSelectors";

const CommentList = ({ postIndex }) => {
  const comments = useSelector(getComments);
  const posts = useSelector(getPosts);

  const post = posts.posts[postIndex];
  const commentList = comments?.[postIndex] || [];

  const commentElements = commentList.map((comment, i) => {
    return (
      <li key={uuid()}>
        <Comment comment={comment} commentIndex={i} postIndex={postIndex} />
      </li>
    );
  });

  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <ul>{commentElements}</ul>
    </>
  );
};

CommentList.propTypes = {
  postIndex: PropTypes.number.isRequired,
};

export default CommentList;

import React from "react";
import PropTypes from "prop-types";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../selectors/commentSelectors";
import uuid from "react-uuid";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";

const Post = ({ id, title, body, postcomments }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(getComments);
  console.log("comments in post", comments);

  const handleClick = () => {
    dispatch(deletePost(id));
    // dispatch(deleteComment(id))
  };

  const commentList = comments.map((comment) => {
    return <li key={uuid()}>{comment.text}</li>;
  });

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} data-testid="delete-icon" />
      <section>
        <h2 data-testid="title">{title}</h2>
        <p>{body}</p>
        <ul>{commentList}</ul>
        <CommentForm postId={id} />
        <CommentList />
      </section>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postcomments: PropTypes.array.isRequired,
};

export default Post;

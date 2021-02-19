import React from "react";
import PropTypes from "prop-types";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { useDispatch } from "react-redux";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";

const Post = ({ id, title, body, postcomments }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
    // dispatch(deleteComment(id))
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} data-testid="delete-icon" />
      <section>
        <h2 data-testid="title">{title}</h2>
        <p>{body}</p>
        <ul>
          <CommentList postId={id} />
        </ul>
        <CommentForm postId={id} />
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

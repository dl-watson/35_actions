import React from "react";
import PropTypes from "prop-types";
import { deletePost, updatePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions/commentActions";
import {
  getComments,
  getCommentsByPostId,
} from "../../selectors/commentSelectors";

const Post = ({ id, title, body, postcomments }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(getComments);
  console.log("comments in post", comments);

  const handleClick = () => {
    dispatch(deletePost(id));
    // dispatch(deleteComment(id))
  };

  const handleComment = (e) => {
    e.preventDefault();
    const { comment } = e.target.elements;

    dispatch(
      createComment({ [comment.id]: { id: Date.now(), text: comment.value } }),
      updatePost(comment.id, comment.value)
    );
  };

  const commentList = comments.map((comment) => {
    return <li key={comment.id}>{comment.text}</li>;
  });

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} data-testid="delete-icon" />
      <section>
        <h2 data-testid="title">{title}</h2>
        <p>{body}</p>
        <ul>{commentList}</ul>
        <form onSubmit={handleComment}>
          <input name="comment" id={id} />
          <button>Comment</button>
        </form>
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

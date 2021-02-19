import React from "react";
import PropTypes from "prop-types";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { getComments } from "../../selectors/commentSelectors";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions/commentActions";

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(getComments);
  console.log(comments);

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { comment } = e.target.elements;

    dispatch(
      createComment({ [comment.id]: { id: Date.now(), text: comment.value } })
    );
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} data-testid="delete-icon" />
      <section>
        <h2 data-testid="title">{title}</h2>
        <p>{body}</p>
        <form onSubmit={handleSubmit}>
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
};

export default Post;

import React from "react";
import PropTypes from "prop-types";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { getComments } from "../../selectors/commentSelectors";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(getComments);
  console.log(comments);

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} data-testid="delete-icon" />
      <section>
        <h2 data-testid="title">{title}</h2>
        <p>{body}</p>
        <div>{comments}</div>
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

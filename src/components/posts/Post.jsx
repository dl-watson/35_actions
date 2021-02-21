import React from "react";
import PropTypes from "prop-types";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ id, title, body, postIndex }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleDelete} data-testid="delete-icon" />
      <Link to={`/${postIndex}`}>
        <section>
          <h2 data-testid="title">{title}</h2>
          <p>{body}</p>
        </section>
      </Link>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired,
};

export default Post;

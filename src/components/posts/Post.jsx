import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "../../providers/PostProvider";
import { deletePost } from "../../actions/postActions";
import styles from "./styles/Post.css";
import deleteIcon from "/public/img/delete.png";

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleClick} />
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
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

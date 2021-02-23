import React from "react";
import { deletePost } from "../../actions/postActions";
import * as styles from "./styles/Post.css";
const deleteIcon = require("/public/img/delete.png");
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostComments } from "../../actions/commentActions";

type PostProps = {
  id: number, 
  title: string, 
  body: string,
  postIndex: number 
}

const Post = (props: PostProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(props.id));
    dispatch(deletePostComments(props.postIndex));
  };

  return (
    <div className={styles.Post}>
      <img src={deleteIcon} onClick={handleDelete} data-testid="delete-icon" />
      <Link to={`/${props.postIndex}`}>
        <section>
          <h2 data-testid="title">{props.title}</h2>
          <p>{props.body}</p>
        </section>
      </Link>
    </div>
  );
};

export default Post;

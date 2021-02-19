import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postActions";
import styles from "./styles/NewPostForm.css";

const NewPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ id: Date.now(), title, body, postcomments: [] }));
  };

  return (
    <section className={styles.NewPostForm} onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <form>
        <input
          name="title"
          value={title}
          placeholder="Title..."
          onChange={({ target }) => setTitle(target.value)}
        />
        <textarea
          name="body"
          value={body}
          placeholder="Body..."
          onChange={({ target }) => setBody(target.value)}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default NewPostForm;

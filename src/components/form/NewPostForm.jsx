import React, { useState } from "react";
import { createPost } from "../../actions/postActions";
import { useDispatch } from "../../providers/PostProvider";
import styles from "./styles/NewPostForm.css";

const NewPostForm = () => {
  // refactor into a separate hook after wiring up the reducer
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ id: Date.now(), title, body }));
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

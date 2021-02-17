import React, { useState } from "react";
import useDispatch from "../../providers/PostProvider";
import styles from "./styles/NewPostForm.css";

const NewPostForm = () => {
  // refactor into a separate hook after wiring up the reducer
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { elements } = e.target;

    setTitle(elements.title.value);
    setBody(elements.body.value);

    dispatch(createPost({ title, body }));
  };

  return (
    <section className={styles.NewPostForm} onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <form>
        <input name="title" value={title} placeholder="Title..." />
        <textarea name="body" value={body} placeholder="Body..." />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default NewPostForm;

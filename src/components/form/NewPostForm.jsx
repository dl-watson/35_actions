import React from "react";
import styles from "./styles/NewPostForm.css";

const NewPostForm = () => {
  return (
    <section className={styles.NewPostForm}>
      <h2>Create Post</h2>
      <form>
        <input name="title" placeholder="Title..." />
        <textarea name="body" placeholder="Body..." />
      </form>
    </section>
  );
};

export default NewPostForm;

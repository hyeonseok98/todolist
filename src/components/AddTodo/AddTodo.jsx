import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || content.trim().length === 0) return;

    onAdd({ id: uuidv4(), title, content, isDone: "working" });
    setTitle("");
    setContent("");
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      ></input>
      <input
        className={styles.contentInput}
        type="text"
        placeholder="내용을 입력하세요"
        onChange={handleContentChange}
        value={content}
      ></input>
      <button className={styles.submitBtn} type="submit">
        제출
      </button>
    </form>
  );
}

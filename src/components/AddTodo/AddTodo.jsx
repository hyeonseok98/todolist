import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const content = contentRef.current.value.trim();
    if (title.length === 0 || content.length === 0) return;

    onAdd({ id: uuidv4(), title, content, isDone: "working" });
    titleRef.current.value = "";
    contentRef.current.value = "";
    titleRef.current.focus();
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="제목"
        ref={titleRef}
      ></input>
      <input
        className={styles.contentInput}
        type="text"
        placeholder="내용을 입력하세요"
        ref={contentRef}
      ></input>
      <button className={styles.submitBtn} type="submit">
        제출
      </button>
    </form>
  );
}

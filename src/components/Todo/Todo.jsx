import deleteIcon from "../../assets/deleteIcon-24.png";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, title, content, isDone } = todo;

  const handleChange = (e) => {
    const isDone = e.target.checked ? "done" : "working";
    onUpdate({ ...todo, isDone });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={isDone === "done"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.todoContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
      </label>

      <button onClick={handleDelete} className={styles.deleteBtn}>
        <img src={deleteIcon} className={styles.deleteIcon} alt="deleteIcon" />
      </button>
    </li>
  );
}

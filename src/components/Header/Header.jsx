import styles from "./Header.module.css";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.status}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.statusList} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.headerText}>My TodoList</div>
    </header>
  );
}

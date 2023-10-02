import styles from "./TaskHeader.module.css";

export function TaskHeader() {
  return (
    <div className={styles.taskHeaderWrapper}>
      <header>
        <span className={styles.createdTask}>
          Tarefas criadas <span className={styles.taskCounter}>0</span>
        </span>
        <span className={styles.completedTask}>
          Concluídas <span className={styles.taskCounter}>0</span>
        </span>
      </header>
    </div>
  );
}

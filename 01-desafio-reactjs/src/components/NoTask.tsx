import styles from "./NoTask.module.css";
import { TaskHeader } from "./TaskHeader";
import imgClipboard from "../assets/Clipboard.svg";

export function NoTask() {
  return (
    <article>
      <TaskHeader />
      <article className={styles.noTaskWrapper}>
        <img
          src={imgClipboard}
          alt="ClipBoard No Task"
          className={styles.imgClipboard}
        />
        <h1 className={styles.titleNoTask}>
          Você ainda não tem tarefas cadastradas
        </h1>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </article>
    </article>
  );
}

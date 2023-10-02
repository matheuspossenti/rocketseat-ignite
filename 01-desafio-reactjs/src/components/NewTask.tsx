import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";
import { NoTask } from "./NoTask";
import { Task } from "./Task";

export function NewTask() {
  return (
    <section className={styles.newTaskWrapper}>
      <header>
        <form className={styles.newTaskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </header>

      <Task />
    </section>
  );
}

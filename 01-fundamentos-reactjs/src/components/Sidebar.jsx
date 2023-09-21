import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsZWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/matheuspossenti.png" />

        <strong>Matheus Possenti</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

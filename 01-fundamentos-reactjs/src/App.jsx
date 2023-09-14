import { Post } from "./Post";
import { Header } from "./components/header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Matheus Possenti" content="Lorem" />
          <Post author="Vinicius Slongo" content="Ipsum" />
        </main>
      </div>
    </div>
  );
}

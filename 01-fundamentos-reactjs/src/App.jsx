import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

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

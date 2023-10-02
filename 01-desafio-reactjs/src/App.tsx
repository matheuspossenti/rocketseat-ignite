import { Header } from "./components/Header";
import styles from "./App.module.css";
import { NewTask } from "./components/NewTask";
import "./global.css";
import { NoTask } from "./components/NoTask";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </div>
  );
}

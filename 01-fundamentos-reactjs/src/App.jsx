import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url : "", name: "", role: "" }
// publishedAt: date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheuspossenti.png",
      name: "Matheus Possenti",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2021-09-26 09:49:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/vslongo.png",
      name: "Vinicius Slongo",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2021-09-26 09:51:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

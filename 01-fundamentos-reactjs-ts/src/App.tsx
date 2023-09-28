import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheuspossenti.png",
      name: "Matheus Possenti",
      role: "CTO @ HubSys",
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
      role: "CEO @ HubSys",
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
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ana Claudia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab ipsa laboriosam blanditiis earum fugit alias beatae, amet dolores vel voluptates autem eius itaque veniam placeat mollitia consectetur nulla nesciunt!"
          />
          <Post
            author="Ana Claudia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab ipsa laboriosam blanditiis earum fugit alias beatae, amet dolores vel voluptates autem eius itaque veniam placeat mollitia consectetur nulla nesciunt!"
          />
        </main>
      </div>
    </>
  );
}

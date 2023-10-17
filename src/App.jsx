import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

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

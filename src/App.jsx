import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Ana Claudia"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab ipsa laboriosam blanditiis earum fugit alias beatae, amet dolores vel voluptates autem eius itaque veniam placeat mollitia consectetur nulla nesciunt!"
      />
    </>
  );
}

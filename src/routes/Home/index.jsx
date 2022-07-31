import styles from "./index.module.css";
import { Main, NewsList, Sidebar, SourcesList } from "../../common";

const query = "?sources=bbc-news&";

export const Home = () => {
  return (
    <div className={styles.body}>
      <Sidebar>
        <SourcesList />
      </Sidebar>
      <Main>
        <NewsList />
      </Main>
    </div>
  );
};

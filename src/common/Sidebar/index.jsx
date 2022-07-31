import styles from "./index.module.css"

export const Sidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};

// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=87e4a009c75a4431af160e84f7bce47d
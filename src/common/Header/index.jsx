import styles from "./index.module.css";

export const Header = (props) => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        {props.children}
      </div>
    </header>
  );
};

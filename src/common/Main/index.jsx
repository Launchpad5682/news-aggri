import styles from "./index.module.css";

export const Main = ({children}) => {


    return <main className={styles.main}>
        {children}
    </main>;
}
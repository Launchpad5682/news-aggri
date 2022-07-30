import { useDrawerContext } from "../../context/drawer-context";
import styles from "./index.module.css";

const Drawer = ({ children }) => {
  const { drawerToggle } = useDrawerContext();
  return (
    <aside
      className={`${styles.drawer} ${
        drawerToggle ? styles.drawer__on : styles.drawer__off
      }`}
    >
      {children}
    </aside>
  );
};

const Toggle = () => {
  const { drawerToggle, setDrawerToggle } = useDrawerContext();

  return (
    <span
      onClick={() => setDrawerToggle((prev) => !prev)}
      className={styles.toggle}
    >
      <span
        className={`${styles.line1} ${styles.lines} ${
          drawerToggle && styles.close__line1
        }`}
      ></span>
      {/* <span
        className={`${styles.line2} ${styles.lines} ${
          drawerToggle && styles.close__line2
        }`}
      ></span> */}
      <span
        className={`${styles.line2} ${styles.lines} ${
          drawerToggle && styles.close__line2
        }`}
      ></span>
    </span>
  );
};

Drawer.Toggle = Toggle;

export { Drawer };

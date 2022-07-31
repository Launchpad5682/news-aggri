import { useAppContext } from "../../context/app-context";
import { useDrawerContext } from "../../context/drawer-context";
import styles from "./index.module.css";

export const Source = ({ source }) => {
  const { id, name } = source;
  const { source: sourceSelected, dispatch } = useAppContext();
  const { setDrawerToggle } = useDrawerContext();

  return (
    <div
      className={`${styles.source__name} ${
        sourceSelected === id && styles.source__active
      }`}
      onClick={() => {
        dispatch({ type: "SET_SOURCE", payload: { source: id } });
        setDrawerToggle((prev) => !prev);
      }}
    >
      {name}
    </div>
  );
};

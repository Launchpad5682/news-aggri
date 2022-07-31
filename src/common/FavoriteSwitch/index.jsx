import { useAppContext } from "../../context/app-context";
import styles from "./index.module.css";

export const FavoriteSwitch = () => {
  const { favorites, favoriteToggle, dispatch } = useAppContext();

  return (
    <div className={styles.favorite__container}>
      Favourites {favorites?.length > 0 && `(${favorites.length})`}
      <div
        className={`${styles.toggle__container} 
       ${favoriteToggle && styles.toggle__container__on}`}
        onClick={() => dispatch({ type: "TOGGLE_FAVORITE" })}
      >
        <div
          className={`${styles.toggle} ${styles.toggle__off} ${
            favoriteToggle && styles.toggle__on
          }`}
        ></div>
      </div>
    </div>
  );
};

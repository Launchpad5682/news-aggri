import styles from "./index.module.css";
import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkDashFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/app-context";

export const FavoriteSelector = ({ article }) => {
  const [favorite, setFavorite] = useState(false);
  const { favorites, dispatch } = useAppContext();
  // console.log(favorite, favorites);
  useEffect(() => {
    if (favorites) {
      const found = favorites?.find((art) => art.title === article.title);
      // console.log(found, "found something");
      if (found) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [article, favorites]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        favorite
          ? dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { article } })
          : dispatch({ type: "ADD_TO_FAVORITES", payload: { article } });
      }}
      data-testid="favorite-toggle"
    >
      {!favorite ? (
        <BsFillBookmarkDashFill className={styles.favorite__icon} />
      ) : (
        <BsFillBookmarkCheckFill className={styles.favorite__icon} />
      )}
    </div>
  );
};

import { FavoriteSwitch } from "../FavoriteSwitch";
import { Source } from "../Source";
import { useSourcesList } from "./useSourcesList";
import styles from "./index.module.css";

export const SourcesList = () => {
  const { sourcesList, loading } = useSourcesList();
  return (
    <div className={styles.sources}>
      <div className={styles.source__heading}>Sources</div>
      <Source source={{ name: "All", id: "all" }} key="all-sources" />
      <div className={styles.sourceslist}>
        {sourcesList?.map((source) => (
          <Source source={source} key={source.id} />
        ))}
        {loading && <>Loading....</>}
      </div>
      <div className={styles.favorite}>
        <FavoriteSwitch />
      </div>
    </div>
  );
};

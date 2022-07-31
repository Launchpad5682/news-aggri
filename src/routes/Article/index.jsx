import { Main } from "../../common";
import { FavoriteSelector } from "../../common/FavoriteSelector";
import { useAppContext } from "../../context/app-context";
import { timeStampFormatter } from "../../helper/timeStampFormatter";
import styles from "./index.module.css";

export const Article = () => {
  const { activeArticle: article } = useAppContext();

  const { title, urlToImage, description, publishedAt } = article;

  return (
    <Main>
      <div className={styles.article__container}>
        <div className={styles.title} data-testid="news-heading-article">
          {title}
        </div>
        <div className={styles.subheading}>
          <div> {timeStampFormatter(publishedAt)} </div>
          <FavoriteSelector article={article} />
        </div>
        <div className={styles.image__container}>
          <img src={urlToImage} alt={title} className={styles.image} />
        </div>
        <div className={styles.paragraph}>{description}</div>
      </div>
    </Main>
  );
};

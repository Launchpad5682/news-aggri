import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/app-context";
import { timeStampFormatter } from "../../helper/timeStampFormatter";
import { FavoriteSelector } from "../FavoriteSelector";
import styles from "./index.module.css";

export const NewsCard = ({ article }) => {
  const { title, urlToImage, publishedAt } = article;
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [navigateToArticle, setNavigateToArticle] = useState(false);

  useEffect(() => {
    if (navigateToArticle) {
      navigate(`/article/${title}`);
    }
  }, [navigate, navigateToArticle, title]);

  return (
    <div
      className={styles.news__card}
      onClick={() => {
        setNavigateToArticle(true);
        dispatch({ type: "SET_ACTIVE_ARTICLE", payload: { article } });
      }}
      data-testid="news-card"
    >
      <div className={styles.news__image__container}>
        <img src={urlToImage} alt={title} className={styles.news__image__fit} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__title} data-testid="news-heading">
          {title}
        </div>
        <div className={styles.date}>{timeStampFormatter(publishedAt)}</div>
        <div className={styles.favorite}>
          <FavoriteSelector article={article} />
        </div>
      </div>
    </div>
  );
};

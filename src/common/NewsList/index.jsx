import { useEffect, useState } from "react";
import { useAppContext } from "../../context/app-context";
import { fetchByQuery } from "../../helper/fetchByQuery";
import { NewsCard } from "../NewsCard";
import styles from "./index.module.css";

const list = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Ukraine’s Zelenskyy announces evacuation of Donetsk region",
      description:
        "President Zelenskyy says logistics and support operations were being handled by the authorities.",
      url: "http://www.aljazeera.com/news/2022/7/30/ukraines-zelenskyy-announces-evacuation-of-donetsk-region",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/AP22189527889099.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T22:41:39Z",
      content:
        "Ukrainian President Volodymyr Zelenskyy said his government was ordering the mandatory evacuation of people in the eastern Donetsk region, scene of fierce fighting with Russia.\r\nThe governor of Donet… [+1337 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Italy: Outrage over fatal attack on Nigerian street vendor",
      description:
        "Police have arrested an Italian man in the killing of a Nigerian vendor whose brutal beating was filmed by onlookers.",
      url: "http://www.aljazeera.com/news/2022/7/30/video-of-fatal-attack-on-african-immigrant-shocks-italy",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/ITALY-CIVITANOVA-MARCHE-1000x562-1.jpg?fit=1000%2C562",
      publishedAt: "2022-07-30T21:10:47Z",
      content:
        "Police have arrested an Italian man in the killing of a Nigerian street vendor whose brutal beating death on a busy beach town thoroughfare was filmed by onlookers without any apparent attempt to int… [+3540 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Ukraine says dozens of Russian soldiers killed in the south",
      description:
        "Ukrainian military says more than 100 Russian soldiers were killed and seven tanks were destroyed in the fighting.",
      url: "http://www.aljazeera.com/news/2022/7/30/ukraine-says-dozens-of-russian-soldiers-killed-in-the-south",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/000_32FQ3KV.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T20:08:55Z",
      content:
        "The Ukrainian military says it has killed dozens of Russian soldiers in fighting in the south, including the Kherson region that is the focus of Kyivs counteroffensive in that part of the country and… [+5429 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "US President Joe Biden again tests positive for COVID",
      description:
        "White House physician says that Biden ‘has experienced no reemergence of symptoms, and continues to feel quite well.’",
      url: "http://www.aljazeera.com/news/2022/7/30/us-president-joe-biden-again-tests-positive-for-covid",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-29T150314Z_1436869144_RC24LV9MWCQL_RTRMADP_3_USA-COURT-NOMINEES-ABORTION.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T19:25:27Z",
      content:
        "US President Joe Biden tested positive for COVID-19 again, several days after he was cleared to exit coronavirus isolation, the White House has said, in a rare case of rebound following treatment wit… [+1198 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "US: Kentucky flooding death toll rises to 25",
      description:
        "At least 25 people, including four children, killed as torrential rains hit towns across the state, governor says.",
      url: "http://www.aljazeera.com/news/2022/7/30/us-kentucky-flooding-death-toll-rises",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/AP22211574830508.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T18:20:41Z",
      content:
        "At least 25 people died, including four children, when torrential rains swamped towns across Appalachia, Kentuckys governor has said.\r\nGovernor Andy Beshear said on Saturday that the number would lik… [+3133 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Russia’s Gazprom cuts off gas supplies to Latvia",
      description:
        "Senior Latvian official says move has little effect as Baltic country decided to ban Russian gas imports from January.",
      url: "http://www.aljazeera.com/news/2022/7/30/russias-gazprom-cuts-off-gas-supplies-to-latvia",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/2014-08-12T120000Z_826426718_GM1EA8C1M2Q01_RTRMADP_3_LATVIA-ENERGY.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T16:35:54Z",
      content:
        "Russian gas producer Gazprom has said it has stopped sending gas to Latvia after accusing it of violating supply conditions, a move the Baltic country said would have little impact on its gas supplie… [+3069 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Russia-Ukraine war: List of key events, day 157",
      description:
        "As the Russia-Ukraine war enters its 157th day, we take a look at the main developments.",
      url: "http://www.aljazeera.com/news/2022/7/30/russia-ukraine-war-list-of-key-events-day-157",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/03/AP22087592940228.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T16:19:30Z",
      content:
        "Here are the key events so far on Saturday, July 30.\r\nGet the latest updates here.\r\nFighting\r\nUkraines southern command said more than 100 Russian soldiers and seven tanks had been destroyed in fight… [+1779 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Ali Harb",
      title: "US elections: Bernie Sanders campaigns for Michigan progressives",
      description:
        "Left-wing US senator implicitly hits out at the pro-Israel group AIPAC at a rally for Rashida Tlaib and Andy Levin.",
      url: "http://www.aljazeera.com/news/2022/7/30/us-elections-bernie-sanders-campaigns-for-michigan-progressives",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/Bernie-Sanders-Levin-Rashida.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T13:49:54Z",
      content:
        "Pontiac, Michigan, US More than two years after ending his second campaign for the Democratic nomination for president, Bernie Sanders can still get large crowds to cheer widely and mobilise for his … [+4343 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Sixteen ships loaded with grain ready to leave Ukraine’s Odesa",
      description:
        "Ships are loaded and ready to depart Odesa as Moscow and Kyiv trade blame for an attack that killed Ukrainian POWs.",
      url: "http://www.aljazeera.com/news/2022/7/30/several-ships-loaded-with-grain-ready-to-leave-ukraines-odesa",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-29T115327Z_712224350_RC2JLV9IBMIA_RTRMADP_3_UKRAINE-CRISIS-GRAINS-ODESA.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T13:36:13Z",
      content:
        "Sixteen ships loaded with grain were set to depart from the Ukrainian port of Odesa, as tensions flair up again over a missile attack that killed dozens of Ukrainian prisoners of war.\r\nThe office of … [+2339 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Al-Sadr supporters protest in Iraq capital over new PM nomination",
      description:
        "Show of strength comes three days after storming of parliament over candidacy of Mohammed al-Sudani for prime minister.",
      url: "http://www.aljazeera.com/news/2022/7/30/al-sadr-supporters-protest-in-iraq-capital-over-new-pm-nomination",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-30T075750Z_2004270024_RC27MV9CR3VC_RTRMADP_3_IRAQ-POLITICS-PROTESTS.jpg?resize=1200%2C630",
      publishedAt: "2022-07-30T09:21:24Z",
      content:
        "Iraqi protesters have once again breached concrete barricades leading to Baghdads Green Zone in a show of support for influential Shia leader Muqtada al-Sadr, days after they stormed parliament and s… [+2591 chars]",
    },
  ],
};

export const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const { source } = useAppContext();
  const { favorites, favoriteToggle } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (favoriteToggle) {
      setNewsList(favorites);
    } else {
      (async () => {
        setLoading(true);
        const query =
          source === "all"
            ? "top-headlines?category=general&"
            : `top-headlines?sources=${source}&`;
        // console.log(query);
        const { data, error } = await fetchByQuery(query);

        if (data) {
          const { articles } = data;
          setNewsList(articles);
        }
        setLoading(false);
      })();
    }
  }, [favoriteToggle, favorites, source]);

  if (newsList.length === 0) {
    return (
      <div className={styles.news__list}>
        <div>{loading ? "Loading...." : "No News to show"}</div>
      </div>
    );
  }

  return (
    <div className={styles.news__list}>
      {newsList?.length > 0 &&
        newsList.map((newsItem) => (
          <NewsCard article={newsItem} key={newsItem.title} />
        ))}
    </div>
  );
};

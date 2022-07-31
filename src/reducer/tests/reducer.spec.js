import { reducer } from "../reducer";

const initialState = {
  favorites: [],
  favoriteToggle: false,
  source: "all",
  activeArticle: {},
};

const article = {
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
};

const favorites = [
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
];

describe("Reducer Testing", () => {
  it("Setting Favorites", () => {
    const updatedState = {
      favorites: favorites,
      favoriteToggle: false,
      source: "all",
      activeArticle: {},
    };

    expect(
      reducer(initialState, { type: "SET_FAVORITES", payload: { favorites } })
    ).toStrictEqual(updatedState);
  });

  it("Setting Active Article", () => {
    const updatedState = {
      favorites: [],
      favoriteToggle: false,
      source: "all",
      activeArticle: article,
    };

    expect(
      reducer(initialState, {
        type: "SET_ACTIVE_ARTICLE",
        payload: { article },
      })
    ).toStrictEqual(updatedState);
  });

  it("Add to Favorite", () => {
    const updatedState = {
      favorites: [article],
      favoriteToggle: false,
      source: "all",
      activeArticle: {},
    };

    expect(
      reducer(initialState, { type: "ADD_TO_FAVORITES", payload: { article } })
    ).toStrictEqual(updatedState);
  });

  it("Remove from favorite", () => {
    const updatedState = {
      favorites: [],
      favoriteToggle: false,
      source: "all",
      activeArticle: {},
    };

    expect(
      reducer(initialState, {
        type: "REMOVE_FROM_FAVORITES",
        payload: { article },
      })
    ).toStrictEqual(updatedState);
  });

  it("Toggle Favorite On", () => {
    const updatedState = {
      favorites: [],
      favoriteToggle: true,
      source: "all",
      activeArticle: {},
    };

    expect(reducer(initialState, { type: "TOGGLE_FAVORITE" })).toStrictEqual(
      updatedState
    );
  });

  it("Toggle Favorite Off", () => {
    const initialStateOn = { ...initialState, favoriteToggle: true };
    const updatedState = {
      favorites: [],
      favoriteToggle: false,
      source: "all",
      activeArticle: {},
    };
    expect(reducer(initialStateOn, { type: "TOGGLE_FAVORITE" })).toStrictEqual(
      updatedState
    );
  });

  it("Set Source", () => {
    const source = "bbc-news";
    const updatedState = {
      favorites: [],
      favoriteToggle: false,
      source: "bbc-news",
      activeArticle: {},
    };

    expect(
      reducer(initialState, { type: "SET_SOURCE", payload: { source } })
    ).toStrictEqual(updatedState);
  });
});

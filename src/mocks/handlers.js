import { rest } from "msw";

export const handlers = [
  rest.get("https://newsapi.org/v2/sources", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
        sources: [
          {
            id: "abc-news",
            name: "ABC News",
            description:
              "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
            url: "https://abcnews.go.com",
            category: "general",
            language: "en",
            country: "us",
          },
          {
            id: "abc-news-au",
            name: "ABC News (AU)",
            description:
              "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
            url: "http://www.abc.net.au/news",
            category: "general",
            language: "en",
            country: "au",
          },
        ],
      })
    );
  }),
  rest.get("https://newsapi.org/v2/top-headlines", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
        articles: [
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
            title:
              "US elections: Bernie Sanders campaigns for Michigan progressives",
            description:
              "Left-wing US senator implicitly hits out at the pro-Israel group AIPAC at a rally for Rashida Tlaib and Andy Levin.",
            url: "http://www.aljazeera.com/news/2022/7/30/us-elections-bernie-sanders-campaigns-for-michigan-progressives",
            urlToImage:
              "https://www.aljazeera.com/wp-content/uploads/2022/07/Bernie-Sanders-Levin-Rashida.jpg?resize=1200%2C630",
            publishedAt: "2022-07-30T13:49:54Z",
            content:
              "Pontiac, Michigan, US More than two years after ending his second campaign for the Democratic nomination for president, Bernie Sanders can still get large crowds to cheer widely and mobilise for his … [+4343 chars]",
          },
        ],
      })
    );
  }),
];

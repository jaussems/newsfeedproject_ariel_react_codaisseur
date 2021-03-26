import { useState, useEffect } from "react";
import axios from "axios";
import NewsArticleComponent from "./newsarticleComponent";
export default function GenerateAPIData() {
  const [Articledata, set_ArticleData] = useState("");

  console.log(`This is the data before fetching`, Articledata);

  useEffect(() => {
    async function getSomeData() {
      console.log("I am gonna fetch some data");

      const Apikey = `16cb947bc0cd44e88c1b6342d9fc0f8c`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=${Apikey}`
      );

      console.log(`Got the res back`, response.data.articles);
      set_ArticleData(response.data.articles);
    }

    getSomeData();
  }, []);

  console.log(`This is the current state:`, Articledata);
  return (
    <div>
      <h1>Hello API Page</h1>
      {Articledata
        ? Articledata.map((article) => {
            return (
              <div>
                <NewsArticleComponent
                  title={article.title}
                  author={article.author}
                />
              </div>
            );
          })
        : "NO"}
    </div>
  );
}

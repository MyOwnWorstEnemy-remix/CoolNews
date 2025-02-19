import { useEffect, useState } from "react";
import NewsArticle from "../../ui/news-article/news-article";

type Article = {
  "title": string,
  "description": string,
  "content": string,
  "url": string,
  "image": string,
  "publishedAt": string,
  "source": {
    "name": string,
    "url": string
  }
}

type ArticleList = {
  "id": string,
  "list" : Article[],
}

function News() {
  const serverUrl = 'http://localhost:3000/articles';
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("world");

  const sortData = (data: Article[]): Article[] => {
    const sortedData = data.sort((info1, info2) => {
      if (info1.publishedAt > info2.publishedAt) {
        return -1;
      }
      if (info1.publishedAt < info2.publishedAt) {
        return 1;
      }
      return 0;
    });
    return sortedData
  };

  useEffect(() => {
    fetch(serverUrl)
      .then((resp) => resp.json())
      .then((data: ArticleList[]) => {
        if (category === "") {
          const allData = data.reduce((acc: Article[], info) => [...acc, ...info.list], []);
          const sortedData = sortData(allData);
          setArticles(sortedData);
        } else {
          const selectedData = data.filter((info: ArticleList) => info.id === category);
          const sortedData = sortData(selectedData[0].list);
          setArticles(sortedData);
        }        
      });
  }, [category]);

  return (
    <>
      <h2>News</h2>
      <ul>
        {articles.length > 0 ? articles.map((article) => 
            <li key={article.url}>
               <NewsArticle article={article}/>
            </li>
        ) : null}
      </ul>
      
    </>
  );
}

export default News;

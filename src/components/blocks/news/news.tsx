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
  const [articles, setArticles] = useState<ArticleList[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(serverUrl)
      .then((resp) => resp.json())
      .then((data: ArticleList[]) => {
        if (category === "") {
          setArticles(data);
        } else {
          const selectedData = data.filter((info: ArticleList) => info.id === category);
          setArticles(selectedData);
          console.log(selectedData);
        }        
      });
  }, [category]);

  return (
    <>
      <h2>News</h2>
      <ul>
        {articles.length > 0 ? articles.map((articleList) => 
          articleList.list.map((article) => 
            <li key={article.url}>
               <NewsArticle article={article}/>
            </li>
          )
        ) : null}
      </ul>
      
    </>
  );
}

export default News;

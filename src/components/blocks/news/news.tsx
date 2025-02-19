import { useEffect, useState } from "react";
import NewsArticle from "../../ui/news-article/news-article";
import { Article, ArticleList } from "../../../types/types";
import { Category } from "../../../types/types";

function News({categoryList}: {categoryList: Category[]}) {
  const serverUrl = 'http://localhost:3000/articles';
  const [articles, setArticles] = useState<Article[]>([]);
  

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
        let allData: Article[] = [];
        categoryList.forEach((category) => {
          const selectedData = data.filter((info: ArticleList) => info.id === category);
          allData.push(...selectedData.reduce((acc: Article[], info) => [...acc, ...info.list], []));
        });  

        const sortedData = sortData(allData);
        setArticles(sortedData);
      });
  }, [categoryList]);

  return (
    <>
      <h2>Новости</h2>
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

import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import List from "../../ui/list/list";
import { Article, ArticleList } from "../../../types/types";
import { Category } from "../../../types/types";
import { Section, Title } from "./styles";

function NewsSection({categoryList}: {categoryList: Category[]}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const favourites = useFetchFavourite("news");
  const serverUrl = 'http://localhost:3000/articles';

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
          let selectedData = data.filter((info: ArticleList) => info.id === category);
          for (let i = 0; i < selectedData.length; i++) {
            console.log(selectedData[i].list);
            selectedData[i].list = selectedData[i].list.map((item: Article) => {return {...item, entityType: "news"}});
            console.log(selectedData[i].list);
          }
          console.log(selectedData);
          allData.push(...selectedData.reduce((acc: Article[], info) => [...acc, ...info.list], []));
        });  

        const sortedData = sortData(allData);
        setArticles(sortedData);
      });
  }, [categoryList]);

  return (
    <Section>
      <Title>Новости</Title>
      <List itemList={articles} favourites={favourites} />
    </Section>
  );
}

export default NewsSection;

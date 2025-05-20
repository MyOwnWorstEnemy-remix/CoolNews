import { useState } from "react";
import Header from "../../../layout/header/header";
import NewsSection from "../../blocks/news-section/news-section";
import NewsCategory from "../../blocks/news-category/news-category";
import Weather from "../../blocks/weather/weather";
import { Category, CategoryList } from "../../../types/types";
import { HiddenTitle, Main } from "./styles";
import Footer from "../../../layout/footer/footer";

export const newsCategories = [
  {
    "id": 0,
    "name": 'general',
    "text": 'Общее',
  }, 
  {
    "id": 1,
    "name": 'world',
    "text": 'Мировые',
  }, 
  {
    "id": 2,
    "name": 'nation',
    "text": 'Национальные',
  }, 
  {
    "id": 3,
    "name": 'business',
    "text": 'Бизнес',
  }, 
  {
    "id": 4,
    "name": 'technology',
    "text": 'Технологии',
  }, 
  {
    "id": 5,
    "name": 'entertainment',
    "text": 'Развлечения',
  }, 
  {
    "id": 6,
    "name": 'sports',
    "text": 'Спорт',
  }, 
  {
    "id": 7,
    "name": 'science',
    "text": 'Наука',
  }, 
  {
    "id": 8,
    "name": 'health',
    "text": 'Здоровье',
  }
] as CategoryList[];

function MainPage() {
  const initArr = newsCategories.map((c) => c.name);
  const [categoryList, setCategoryList] = useState<Category[]>(initArr);

  return (
    <>
      <Header/>
      <Main>
        <HiddenTitle>MainPage</HiddenTitle>
        <NewsCategory categories={newsCategories} categoryList={categoryList} setCategory={setCategoryList}/>
        <NewsSection categoryList={categoryList}/>
        <Weather />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;

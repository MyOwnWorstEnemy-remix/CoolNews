import { useState } from "react";
import Header from "../../../layout/header/header";
import News from "../../blocks/news/news";
import CategorySelect from "../../ui/category-select/category-select";
import { Category, CategoryList } from "../../../types/types";
import { HiddenTitle, Main } from "./styles";

const categories = [
  {
    "id": 0,
    "name": 'general'
  }, 
  {
    "id": 1,
    "name": 'world'
  }, 
  {
    "id": 2,
    "name": 'nation'
  }, 
  {
    "id": 3,
    "name": 'business'
  }, 
  {
    "id": 4,
    "name": 'technology'
  }, 
  {
    "id": 5,
    "name": 'entertainment'
  }, 
  {
    "id": 6,
    "name": 'sports'
  }, 
  {
    "id": 7,
    "name": 'science'
  }, 
  {
    "id": 8,
    "name": 'health'
  }
] as CategoryList[];

function MainPage() {
  const initArr = categories.map((c) => c.name);
  const [categoryList, setCategoryList] = useState<Category[]>(initArr);

  return (
    <>
      <Header/>
      <Main>
        <HiddenTitle>MainPage</HiddenTitle>
        <CategorySelect categories={categories} categoryList={categoryList} setCategoryList={setCategoryList}/>
        <News categoryList={categoryList}/>
      </Main>
      
    </>
  );
}

export default MainPage;

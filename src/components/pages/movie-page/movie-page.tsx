import { useEffect, useRef, useState } from "react";
import Footer from "../../../layout/footer/footer";
import Header from "../../../layout/header/header";
import MovieCategory from "../../blocks/movie-category/movie-category";
import MovieSection from "../../blocks/movie-section/movie-section";
import CustomSelect from "../../ui/custom-select/custom-select";
import { Main, Title, Control } from "./styles";
import { SelectDescription, CurrentMovieCategory } from "../../../types/types";
import { MdFilterListOff } from "react-icons/md";
import { LuArrowUpWideNarrow, LuArrowDownWideNarrow, LuArrowDownAZ, LuCalendarArrowDown } from "react-icons/lu";

export const selectFilmType = [
  {
    "id": 0,
    "value": "all",
    "text": "Показать все",
  },
  {
    "id": 1,
    "value": "animated-series",
    "text": "Мультипликационный сериал",
  },
  {
    "id": 2,
    "value": "tv-series",
    "text": "Сериал",
  },
  {
    "id": 3,
    "value": "movie",
    "text": "Фильм",
  },
  {
    "id": 4,
    "value": "cartoon",
    "text": "Мультифильм",
  }
] as SelectDescription[];

const sortingList = [
  {
    "id": 0,
    "value": "none",
    "text": "Не сортировать",
    "icon": MdFilterListOff,
  },
  {
    "id": 1,
    "value": "rating-down",
    "text": "Спаданию рейтинга",
    "icon": LuArrowDownWideNarrow,
  },
  {
    "id": 2,
    "value": "rating-up",
    "text": "Возрастанию рейтинга",
    "icon": LuArrowUpWideNarrow,
  },
  {
    "id": 3,
    "value": "alphabet",
    "text": "Алфавиту",
    "icon": LuArrowDownAZ,
  },
  {
    "id": 4,
    "value": "date",
    "text": "Новизне",
    "icon": LuCalendarArrowDown,
  },
] as SelectDescription[];

const elementsOnPageList = [
  {
    "id": 0,
    "value": "10",
    "text": "10",
  },
  {
    "id": 1,
    "value": "30",
    "text": "30",
  },
  {
    "id": 2,
    "value": "50",
    "text": "50",
  },
] as SelectDescription[];

function MoviePage() {
  const [currentCategory, setCurrentCategoties] = useState<CurrentMovieCategory>({filmType: "all", rating: [0, 10], genres: {"list": [], all: true}, countries: {"list": [], all: true}});
  const [sort, setSort] = useState<string>("none");
  const [elementsOnPage, setElementsOnPage] = useState<string>("10");

  return (
    <>
      <Header />
      <Main>
        <MovieCategory selectList={selectFilmType} currentCategory={currentCategory} setCategory={setCurrentCategoties} />
        <div>
          <Title>Фильмы</Title>
          <Control>
            <div>
              <p>Сортировать:</p>
              <CustomSelect list={sortingList} value={sort} setValue={setSort} minWidth={250} displayIcon={true}/>
            </div>
            <div>
              <p>Элементов на странице:</p>
              <CustomSelect list={elementsOnPageList} value={elementsOnPage} setValue={setElementsOnPage} minWidth={80}/>
            </div>
          </Control>
          <MovieSection currentCategory={currentCategory} sortingType={sort}/>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default MoviePage;
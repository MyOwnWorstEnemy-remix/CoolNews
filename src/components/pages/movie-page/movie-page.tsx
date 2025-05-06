import { useState } from "react";
import Footer from "../../../layout/footer/footer";
import Header from "../../../layout/header/header";
import MovieCategory from "../../blocks/movie-category/movie-category";
import MovieList from "../../blocks/movie-list/movie-list";
import CustomSmallSelect from "../../ui/custom-small-select/custom-small-select";
import { Main, Title, Control } from "./styles";
import { MovieDescription, CurrentMovieCategory } from "../../../types/types";
import { MdFilterListOff } from "react-icons/md";
import { LuArrowUpWideNarrow, LuArrowDownWideNarrow, LuArrowDownAZ, LuCalendarArrowDown } from "react-icons/lu";

const categories = {
  filmType: [
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
  ]
} as MovieDescription;

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
];

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
];

function MoviePage() {
  const [currentCategory, setCurrentCategoties] = useState<CurrentMovieCategory>({filmType: "all", rating: [0, 10], genres: {"list": [], all: true}, countries: {"list": [], all: true}});
  const [sort, setSort] = useState<string>("none");
  const [elementsOnPage, setElementsOnPage] = useState<string>("10");

  return (
    <>
      <Header />
      <Main>
        <MovieCategory categories={categories} currentCategory={currentCategory} setCategory={setCurrentCategoties} />
        <div>
          <Title>Фильмы</Title>
          <Control>
            <div>
              <p>Сортировать:</p>
              <CustomSmallSelect list={sortingList} value={sort} setValue={setSort} minWidth={250} displayIcon={true}/>
            </div>
            <div>
              <p>Элементов на странице:</p>
              <CustomSmallSelect list={elementsOnPageList} value={elementsOnPage} setValue={setElementsOnPage} minWidth={50}/>
            </div>
          </Control>
          <MovieList currentCategory={currentCategory} />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default MoviePage;
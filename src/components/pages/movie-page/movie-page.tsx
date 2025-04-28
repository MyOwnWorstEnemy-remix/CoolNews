import { useState } from "react";
import Footer from "../../../layout/footer/footer";
import Header from "../../../layout/header/header";
import MovieCategory from "../../blocks/movie-category/movie-category";
import MovieList from "../../blocks/movie-list/movie-list";
import { Main } from "./styles";
import { MovieDescription, CurrentMovieCategory } from "../../../types/types";

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

function MoviePage() {
  const [currentCategory, setCurrentCategoties] = useState<CurrentMovieCategory>({filmType: "all", rating: [0, 10], genres: {"list": [], all: true}, countries: {"list": [], all: true}});

  return (
    <>
      <Header />
      <Main>
        <MovieCategory categories={categories} currentCategory={currentCategory} setCategory={setCurrentCategoties} />
        <MovieList currentCategory={currentCategory} />
      </Main>
      <Footer />
    </>
  );
}

export default MoviePage;
import { useState } from "react";
import Footer from "../../../layout/footer/footer";
import Header from "../../../layout/header/header";
import MovieCategory from "../../blocks/movie-category/movie-category";
import MovieList from "../../blocks/movie-list/movie-list";
import { Main } from "./styles";
import { FilmType, MovieDescription, CurrentMovieCategory } from "../../../types/types";

const categories = {
  filmType: [
    {
      "id": 0,
      "value": "animated-series",
      "text": "Мультипликационный сериал",
    },
    {
      "id": 1,
      "value": "tv-series",
      "text": "Сериал",
    },
    {
      "id": 2,
      "value": "movie",
      "text": "Фильм",
    },
    {
      "id": 3,
      "value": "cartoon",
      "text": "Мультифильм",
    }
  ]
} as MovieDescription;

function MoviePage() {
  const [currentCategory, setCurrentCategoties] = useState<CurrentMovieCategory>({filmType: "animated-series"});

  return (
    <>
      <Header />
      <Main>
        <MovieCategory categories={categories} currentCategory={currentCategory} setCategory={setCurrentCategoties} />
        <MovieList />
      </Main>
      <Footer />
    </>
  );
}

export default MoviePage;
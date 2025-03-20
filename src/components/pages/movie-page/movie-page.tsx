import Footer from "../../../layout/footer/footer";
import Header from "../../../layout/header/header";
import MovieList from "../../blocks/movie-list/movie-list";
import { Main } from "./styles";

function MoviePage() {
  return (
    <>
      <Header />
      <Main>
        <MovieList />
      </Main>
      <Footer />
    </>
  );
}

export default MoviePage;
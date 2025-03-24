import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import { Section, List, Title } from "./styles";
import { Film } from "../../../types/types";
import MovieCard from "../../ui/movie-card/movie-card";

function MovieList() {
    const [movies, setMovies] = useState<Film[]>([]);
    const favourites = useFetchFavourite("film");
    const filmsUrl = 'http://localhost:3000/films';

    useEffect(() => {
        fetch(filmsUrl)
        .then((resp) => resp.json())
        .then((data) => {
            setMovies(data);
        });
    }, []);

    return (
        <Section>
            <Title>Фильмы</Title>
            <List>
                {movies.length > 0 ? movies.map((movie) => 
                    <li key={movie.id}>
                        <MovieCard movie={movie} liked={favourites.includes(movie.id)}/>
                    </li>
                ) : null}
            </List>
        </Section>
      );
}

export default MovieList;
import { useEffect, useState } from "react";
import { Section, List, Title } from "./styles";
import { Film } from "../../../types/types";
import FilmCard from "../../ui/film-card/film-card";

function MovieList() {
    const [movies, setMovies] = useState<Film[]>([]);
    const serverUrl = 'http://localhost:3000/films';

    useEffect(() => {
        fetch(serverUrl)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setMovies(data);
        });
    }, []);

    return (
        <Section>
            <Title>Фильмы</Title>
            <List>
                {movies.length > 0 ? movies.map((movie) => 
                    <li key={movie.id}>
                        <FilmCard movie={movie} />
                    </li>
                ) : null}
            </List>
        </Section>
      );
}

export default MovieList;
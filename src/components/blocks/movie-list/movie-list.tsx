import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import { Section, List } from "./styles";
import { Film, CurrentMovieCategory } from "../../../types/types";
import MovieCard from "../../ui/movie-card/movie-card";

function MovieList({currentCategory} : {currentCategory: CurrentMovieCategory}) {
    const [movies, setMovies] = useState<Film[]>([]);
    const favourites = useFetchFavourite("film");
    const filmsUrl = 'http://localhost:3000/films';

    const filterTags = (filmData: Film[], tag: 'genres' | 'countries') => {
        let newData;
        newData = filmData.filter((item: Film) => {
            let result = false;
            for (let j = 0; j < currentCategory[tag].list.length; j++) {
                result = false;
                const genre = currentCategory[tag].list[j];
                for (let i = 0; i < item[tag].length; i++) {
                    if (genre === item[tag][i].name) {
                        result = true;
                        break;
                    }
                }
                if (currentCategory[tag].all && !result) {
                    break;
                }
                if (!currentCategory[tag].all && result) {
                    break;
                }
            }
            if (!result) {
                return false; 
            }
            return true;
        })
        return newData;
    }

    useEffect(() => {
        fetch(filmsUrl)
        .then((resp) => resp.json())
        .then((data) => {
            let filmData = data;
            if (currentCategory.filmType !== 'all') {
                filmData = data.filter((item: Film) => item.type == currentCategory.filmType);
            }
            filmData = filmData.filter((item: Film) => (item.rating.imdb >= currentCategory.rating[0] && item.rating.imdb <= currentCategory.rating[1]));
            if (currentCategory.genres.list.length >= 1) {
                filmData = filterTags(filmData, 'genres');
            }
            if (currentCategory.countries.list.length >= 1) {
                filmData = filterTags(filmData, 'countries');
            }
            console.log(filmData);
            setMovies(filmData);
        });
    }, [currentCategory])

    return (
        <Section>
            <List>
                {movies.length > 0 ? movies.map((movie) => 
                    <li key={movie.id}>
                        <MovieCard movie={movie} liked={favourites.includes(movie.id)}/>
                    </li>
                ) : <p>Извините, по вашему запросу ничего не найдено</p>}
            </List>
        </Section>
      );
}

export default MovieList;
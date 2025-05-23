import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import { Section } from "./styles";
import { Film, CurrentMovieCategory } from "../../../types/types";
import List from "../../ui/list/list";

function MovieSection({currentCategory, sortingType} : {currentCategory: CurrentMovieCategory, sortingType?: string}) {
    const [movies, setMovies] = useState<Film[]>([]);
    const favourites = useFetchFavourite("film");
    const filmsUrl = 'https://json-server-cool-news.vercel.app/films';

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

    const filterList = (filmData: Film[]) => {
        if (currentCategory.filmType !== 'all') {
            filmData = filmData.filter((item: Film) => item.type == currentCategory.filmType);
        }
        filmData = filmData.filter((item: Film) => (item.rating.imdb >= currentCategory.rating[0] && item.rating.imdb <= currentCategory.rating[1]));
        if (currentCategory.genres.list.length >= 1) {
            filmData = filterTags(filmData, 'genres');
        }
        if (currentCategory.countries.list.length >= 1) {
            filmData = filterTags(filmData, 'countries');
        }
        return filmData;
    }
    
    const sortList = (sort: string, data: Film[]) => {
        let sortedList: Film[] = [];
        switch(sort) {                
            case "rating-down": 
                sortedList = data.sort((first, second) => second.rating.imdb - first.rating.imdb);
                break;
            case "rating-up": 
                sortedList = data.sort((first, second) => first.rating.imdb - second.rating.imdb);
                break;
            case "alphabet": 
                sortedList = data.sort((first, second) => {
                    if (first.name[0] > second.name[0]) {
                        return 1;
                    } else if (first.name[0] < second.name[0]) {
                        return -1;
                    }
                    return 0;
                });
                break;
            case "date": 
                sortedList = data.sort((first, second) => second.year - first.year);
                break;
            default: 
                sortedList = data;
                break;
        }
        return sortedList;
    }

    useEffect(() => {
        fetch(filmsUrl)
        .then((resp) => resp.json())
        .then((data) => {
            let filmData = filterList(data);
            filmData = filmData.map((item: Film) => {return {...item, entityType: 'film'}});
            if (sortingType) {
                filmData = sortList(sortingType, filmData);
            }
            setMovies(filmData);
        });
    }, [currentCategory, sortingType]);

    return (
        <Section>
            <List itemList={movies} favourites={favourites} />
        </Section>
      );
}

export default MovieSection;
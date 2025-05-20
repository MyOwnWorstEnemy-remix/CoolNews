import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../../../store/fav-slice";
import { Film } from "../../../types/types";
import { Card, StyledLikesButton, Preview, Content, Info, Rating } from "./styles";
import Like from "../like/like";

function MovieCard({movie, liked}: {movie: Film, liked: boolean}) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const serverUrl = 'https://json-server-cool-news.vercel.app/favourite';

    useEffect(() => {
        if(liked) {
            setIsLiked(true);
        }
    }, []);

    const handleLikeClick = async () => {
        if(!isLiked) {
            dispatch(addFav({data: movie, type: "ADD_FILM"}));
            await fetch(serverUrl, {method: "POST", body: JSON.stringify({id: `film-${movie.id}`})});
        } else {
            dispatch(removeFav({id: movie.id, type: "film"}));
            await fetch(`${serverUrl}/film-${movie.id}`, {method: "DELETE"});
        }
        setIsLiked((like) => !like);
    }

    return (
        <Card>
            <h3>{movie.name}</h3>
            <StyledLikesButton>
                <Like likes={0} isLiked={isLiked} handleLikeClick={handleLikeClick} />
            </StyledLikesButton>
            <Preview>
                <img src={movie.poster.url} width={200} height={300}/>
                {movie.ageRating ? <span>{movie.ageRating}+</span> : null}
            </Preview>
            <Content>
                <Info>
                    <div>
                        <p>Год выпуска: <span>{movie.year}</span></p>
                        <p>Страна: <span>{movie.countries.reduce((acc, item) => acc += `${item.name}, `, "").slice(0, -2)}</span></p>
                        <p>Жанр: <span>{movie.genres.reduce((acc, item) => acc += `${item.name} / `, "").slice(0, -3)}</span></p>
                        <p>Тип: {movie.isSeries ? <span>Сериал</span> : <span>Фильм</span>}</p>
                        {movie.seriesLength ? <p>Продолжительность серии: <span>{movie.seriesLength} мин</span></p> : null}
                        {movie.movieLength ? <p>Продолжительность: <span>{movie.movieLength} мин</span></p>: null}
                    </div>
                    <Rating>
                        {movie.rating.kp > 0 ? <p className="rating--kp">KP {movie.rating.kp.toFixed(1)}</p> : null}
                        <p className="rating--imdb">IMDB {movie.rating.imdb}</p>
                    </Rating>
                </Info>
                <p>{movie.description}</p>
            </Content>
        </Card>
    )
}

export default MovieCard;
import { Film } from "../../../types/types";
import { Card, Preview, Content, Info, Rating } from "./styles";

function FilmCard({movie}: {movie: Film}) {
    return (
        <Card>
            <h3>{movie.name}</h3>
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

export default FilmCard;
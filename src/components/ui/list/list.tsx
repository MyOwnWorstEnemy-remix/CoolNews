import EventCard from "../event-card/event-card";
import NewsArticle from "../news-article/news-article";
import MovieCard from "../movie-card/movie-card";
import { Event, Article, Film } from "../../../types/types";
import { Ul } from "./styles";

function List({itemList, favourites, cardWidth}: {itemList: Event[] | Article[] | Film[], favourites: number[], cardWidth?: number}) {
    return (
        <Ul>
            {itemList.length > 0 ? itemList.map((item) =>                 
                <li key={item.entityType === 'event' ? `${item.title}-${item.id}` : item.id} style={{width: cardWidth ? cardWidth : '100%'}}>
                    {item.entityType === 'event' ? <EventCard event={item} liked={favourites.includes(item.id)}/> : null}
                    {item.entityType === 'news' ? <NewsArticle article={item} liked={favourites.includes(item.id)}/> : null}
                    {item.entityType === 'film' ? <MovieCard movie={item} liked={favourites.includes(item.id)}/> : null}
                </li>
            ) : <p>Извините, по вашему запросу ничего не найдено</p>}
        </Ul>
    )
}

export default List;
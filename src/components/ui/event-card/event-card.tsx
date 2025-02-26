import { Event } from "../../../types/types";
import { Article, Preview } from "./styles";

function EventCard ({event} : {event: Event}) {
    return <Article>
        <Preview>
            <img src={event.img}/>
        </Preview>
        <h1>{event.title}</h1>
    </Article>
}

export default EventCard;
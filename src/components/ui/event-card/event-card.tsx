import { Event } from "../../../types/types";
import { BsEyeFill } from "react-icons/bs";
import { Article, Preview, Content, Footer } from "./styles";
import EventCardAdress from "../event-card-adress/event-card-adress";
import EventCardDetails from "../event-card-details/event-card-details";
import EventCardCuisine from "../event-card-cuisine/event-card-cuisine";
import EventCardFeatures from "../event-card-features/event-card-features";
import Like from "../like/like";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../../../store/fav-slice";

function EventCard ({event} : {event: Event}) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const serverUrl = 'http://localhost:3000/favourite';

    const handleLikeClick = async () => {
        if(!isLiked) {
            dispatch(addFav({data: event, type: "ADD_EVENT"}));
        } else {
            dispatch(removeFav({id: event.id, type: "event"}));
        }
        setIsLiked((like) => !like);
    }

    return <Article>
        <Preview>
            <img src={event.img} height={240} width={320}/>
            <div className="views">
                <BsEyeFill /> <span>{event.views}</span>
            </div>
            {event.adress ? <EventCardAdress adress={event.adress}/> : null}
        </Preview>
        <Content>
            <header>
                <h2><a href={event.link}>{event.title}</a> <span>{event.ageRestriction}</span></h2>
            </header>
            <p className="description">{event.description}</p>
            {event.details ? <EventCardDetails details={event.details}/> : null}
            {event.cuisine ? <EventCardCuisine cuisine={event.cuisine}/>: null}
            {event.features ? <EventCardFeatures features={event.features}/> : null}
            <Footer>
                {event.button ? <a href={event.buttonLink ? event.buttonLink : "#"}>{event.button}</a> : null}
                <Like likes={isLiked ? event.likes + 1 : event.likes} isLiked={isLiked} handleLikeClick={handleLikeClick} />
            </Footer>
        </Content>
    </Article>
}

export default EventCard;
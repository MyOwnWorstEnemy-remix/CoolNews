import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import { Section, Title, List } from "./styles";
import { Event, EventCategory } from "../../../types/types";
import EventCard from "../../ui/event-card/event-card";

type Item = {
  "id": string,
  "list": Event[]
}

function EventsList ({category} : {category: EventCategory}) {  
  const [eventList, setEventList] = useState<Event[]>([]);
  const [dependencies, setDependencies] = useState(true);
  const favourites = useFetchFavourite("event", dependencies);
  const serverUrl = 'http://localhost:3000/events';

  useEffect(() => {
    fetch(`${serverUrl}/${category.city}`)
    .then((resp) => resp.json())
    .then((data) => {
      let events = data.list.filter((item: Item) => item.id === category.type)[0].list;
      const result = [] as Event[];
      if (category.subtype && category.type === 'food') {
        category.subtype?.forEach((subt) => {
          const currentCategory = events.filter((item: Item) => item.id === subt)[0].list;
          result.push(...currentCategory);
        });
      } else {
        result.push(...events);
      }
      setEventList(result);
    });
    setDependencies((d) => !d);
  }, [category])

    return (
        <Section>
          <Title>Афиша</Title>
          <List>
            {eventList.length > 0 ? eventList.map((event) => 
              <li key={`${category.city}-${category.type}-${event.id}`}>
                <EventCard event={event} liked={favourites.includes(event.id)}/>
              </li>
          ) : null}
          </List>
        </Section>
      );
}

export default EventsList;
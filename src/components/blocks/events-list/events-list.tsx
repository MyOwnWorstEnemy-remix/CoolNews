import { useEffect, useState } from "react";
import { Section, Title, List } from "./styles";
import { Event, EventCategory } from "../../../types/types";
import EventCard from "../../ui/event-card/event-card";

type Item = {
  "id": string,
  "list": Event[]
}

function EventsList ({category} : {category: EventCategory}) {
  const [eventList, setEventList] = useState<Event[]>([]);
  const serverUrl = 'http://localhost:3000/events';

  useEffect(() => {
    fetch(`${serverUrl}/${category.city}`)
    .then((resp) => resp.json())
    .then((data) => {
      const events = data.list.filter((item: Item) => item.id === category.type)[0].list;
      setEventList(events);
    });
  }, [category])

    return (
        <Section>
          <Title>Афиша</Title>
          <List>
            {eventList.length > 0 ? eventList.map((event) => 
              <li key={event.id}>
                <EventCard event={event}/>
              </li>
          ) : null}
          </List>
        </Section>
      );
}

export default EventsList;
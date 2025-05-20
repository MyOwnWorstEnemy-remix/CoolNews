import { useEffect, useState } from "react";
import { useFetchFavourite } from "../../../custom-hooks/hooks";
import { Section, Title } from "./styles";
import { Event, EventCategory } from "../../../types/types";
import List from "../../ui/list/list";

type Item = {
  "id": string,
  "list": Event[]
}

function EventsSection ({category} : {category: EventCategory}) {  
  const [eventList, setEventList] = useState<Event[]>([]);
  const [dependencies, setDependencies] = useState(true);
  const favourites = useFetchFavourite("event", dependencies);
  const serverUrl = 'http://localhost:3000/events';

  useEffect(() => {
    fetch(`${serverUrl}/${category.city}`)
    .then((resp) => resp.json())
    .then((data) => {
      let events = data.list.filter((item: Item) => item.id === category.type)[0].list;
      for (let i = 0; i < events.length; i++) {
        if (events[i].list) {
          events[i] = {id: events[i].id, list: events[i].list.map((item: Event) => {return {...item, entityType: 'event'}})};
        } else {
          console.log(events[i]);
          events[i] = {...events[i], entityType: 'event'};
        }
      }
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
          <List itemList={eventList} favourites={favourites} cardWidth={350} />
        </Section>
      );
}

export default EventsSection;
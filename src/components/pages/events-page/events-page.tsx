import { useState } from "react";
import Header from "../../../layout/header/header";
import Weather from "../../blocks/weather/weather";
import EventsSection from "../../blocks/events-section/events-section";
import EventCategorySelect from "../../blocks/event-category-select/event-category-select";
import Footer from "../../../layout/footer/footer";
import { Main } from "./styles";
import { EventCategory, EventDescription } from "../../../types/types";

export const eventCategories = {
  "city": [
    {
      "id": 0,
      "value": "msk",
      "text": "Москва"
    },
    {
      "id": 1,
      "value": "spb",
      "text": "Санкт-Петербург"
    }
  ],
  "type": [
    {
      "id": 0,
      "value": "food",
      "text": "Еда"
    },
    {
      "id": 1,
      "value": "exibit",
      "text": "Выставки"
    },
    {
      "id": 2,
      "value": "excursion",
      "text": "Экскурсии"
    }
  ],
  "subtype": [
    {
      "id": 0,
      "value": "event",
      "text": "Гастрономические события"
    },
    {
      "id": 1,
      "value": "restaurant",
      "text": "Рестораны"
    },
    {
      "id": 2,
      "value": "bar",
      "text": "Бары"
    }
  ]
} as EventDescription;

function EventPage() {
  const [category, setCategory] = useState<EventCategory>({"city": "msk", "type": "food", "subtype": ["event", "restaurant", "bar"]});
  
    return (
      <>
        <Header/>
        <Main>
            <EventCategorySelect categories={eventCategories} currentCategory={category} setCategory={setCategory} />
            <EventsSection category={category} />
            <Weather />
        </Main>
        <Footer />
      </>
    );
  }
  
  export default EventPage;
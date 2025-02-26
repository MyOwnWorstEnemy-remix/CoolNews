import { useState } from "react";
import Header from "../../../layout/header/header";
import Weather from "../../blocks/weather/weather";
import EventsList from "../../blocks/events-list/events-list";
import { Main } from "./styles";
import { EventCategory } from "../../../types/types";

function EventPage() {
  const [category, setCategory] = useState<EventCategory>({"city": "msk", "type": "exibit"});
    return (
      <>
        <Header/>
        <Main>
            <EventsList category={category} />
            <Weather />
        </Main>
      </>
    );
  }
  
  export default EventPage;
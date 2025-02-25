import Header from "../../../layout/header/header";
import Weather from "../../blocks/weather/weather";
import EventsList from "../../blocks/events-list/events-list";
import { Main } from "./styles";

function EventPage() {

    return (
      <>
        <Header/>
        <Main>
            <EventsList />
            <Weather />
        </Main>
      </>
    );
  }
  
  export default EventPage;
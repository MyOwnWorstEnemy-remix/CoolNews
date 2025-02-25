import { Body } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import MoviePage from "../pages/movie-page/movie-page";
import EventPage from "../pages/events-page/events-page";

export default function App() {
  return (
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/events" element={<EventPage />}/>
        </Routes>
      </BrowserRouter>
    </Body>
  );
}
import { Nav, Link } from "./styles";

function MainNav() {
  return (
    <Nav>
      <Link to="/">
        Главная
      </Link>
      <Link to="/movie">
        Фильмы
      </Link>
      <Link to="/events">
        Афиша
      </Link>
    </Nav>
  );
}

export default MainNav;

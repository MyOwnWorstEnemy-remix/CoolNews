import { Nav, Link } from "./styles";

function MainNav() {
  return (
    <Nav>
      <Link to="/">
        Главная
      </Link>
      <Link to="/movie">
        Афиша
      </Link>
    </Nav>
  );
}

export default MainNav;

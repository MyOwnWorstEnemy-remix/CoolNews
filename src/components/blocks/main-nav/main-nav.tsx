import { NavLink } from "react-router-dom";
import "./styles.css";

const isActive = ({ isActive }: { isActive: boolean }) =>
  `main-nav__link ${isActive ? "active" : ""}`;

function MainNav() {
  return (
    <nav className="main-nav">
      <NavLink className={isActive} to="/">
        Главная
      </NavLink>
      <NavLink className={isActive} to="/movie">
        Афиша
      </NavLink>
    </nav>
  );
}

export default MainNav;

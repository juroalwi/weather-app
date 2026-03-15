import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { nav, icon, weather, about } from "./Nav.module.css";

export const Nav = (props) => {
  return (
    <div className={nav}>
      <Link exact to="/">
        <img src="logo.svg" className={icon} />
      </Link>

      <NavLink exact to="/" className={weather}>
        Weather App
      </NavLink>

      <NavLink to="/about" className={about}>
        About
      </NavLink>

      <SearchBar searchCity={props.searchCity} />
    </div>
  );
};

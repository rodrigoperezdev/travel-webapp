import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="src/assets/images/logo/emprise.svg"
          alt=""
        />
      </Link>
      <div className={`header__menu ${isActive ? "active-menu" : ""}`}>
        <nav className={`header__nav ${isActive ? "active-menu" : ""}`}>
          <ul className="header__list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__item header__item--active" : "header__item"
              }
              to="/destination"
            >
              Destination
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__item header__item--active" : "header__item"
              }
              to="/activities"
            >
              Activities
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__item header__item--active" : "header__item"
              }
              to="/specials"
            >
              Specials
            </NavLink>
          </ul>
          <img
            className="header__search-icon"
            src="src/assets/images/header/search.svg"
            alt=""
          />
        </nav>
        <div className="header__login">
          <Link className="header__login-text" to="/login">
            Login
          </Link>
          <Link className="btn btn--primary">Sign up</Link>
        </div>
      </div>

      <button
        onClick={handleActiveMenu}
        className={`hamburger hamburger--collapse ${
          isActive ? "is-active" : ""
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
};

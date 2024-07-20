import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src="src/assets/images/logo/emprise.svg"
        alt=""
      />
      <div className={`header__menu ${isActive ? "active-menu" : ""}`}>
        <nav className={`header__nav ${isActive ? "active-menu" : ""}`}>
          <ul className="header__list">
            <li className="header__item">Destination</li>
            <li className="header__item">Activities</li>
            <li className="header__item">Specials</li>
          </ul>
          <img
            className="header__search-icon"
            src="src/assets/images/header/search.svg"
            alt=""
          />
        </nav>
        <div className="header__login">
          <span className="header__login-text">Login</span>
          <button className="btn btn--primary">Sign up</button>
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

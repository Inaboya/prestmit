import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/boldo_logo.png"

interface NavbarInterface {
  ref: React.RefObject<HTMLDivElement> | null;
}

const Navbar: React.FC<NavbarInterface> = ({ ref }) => {
  const handleScroll = () => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="logo__container">
          <NavLink to="/" className="logo__link" onClick={handleScroll}>
            <img
              src={require("../assets/boldo_logo.png")}
              alt="logo"
              className="logo__img"
            />
            <h1>Boldo</h1>
          </NavLink>
        </div>

        <div className="navbar__links">
          <div className="navbar__link">
            <NavLink
              to="/"
              className="navbar__link--item"
              onClick={handleScroll}
            >
              Product
            </NavLink>
          </div>

          <div className="navbar__link">
            <NavLink
              to="/"
              className="navbar__link--item"
              onClick={handleScroll}
            >
              Services
            </NavLink>
          </div>

          <div className="navbar__link">
            <NavLink
              to="/"
              className="navbar__link--item"
              onClick={handleScroll}
            >
              About
            </NavLink>
          </div>

          <div className="navbar__button">
            <button className="btn__link">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

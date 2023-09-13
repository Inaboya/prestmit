import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
// import logo from "../assets/boldo_logo.png"

interface NavbarInterface {
  ref: React.RefObject<HTMLDivElement> | null;
}

const Navbar: React.FC<NavbarInterface> = ({ ref }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleScroll = () => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  // check if large screen set openMenu to false

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [openMenu]);

  return (
    <div className="navbar__container">
      {openMenu && (
        <Modal>
          <div className="modal__menu--items">
            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                Home
              </NavLink>
            </div>

            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                My Work
              </NavLink>
            </div>

            <div>
              <NavLink className="navbar__menu--item" to="/about">
                About Me
              </NavLink>
            </div>

            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </Modal>
      )}
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

        <div className="hamburger-menu" onClick={handleOpenMenu}>
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

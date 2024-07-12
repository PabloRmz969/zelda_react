import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
  const [checkOpen, setcheckOpen]: [Boolean, Function] = useState(false);

  const openMobileMenu = () => {
    setcheckOpen(!checkOpen);
    const mobileMenu: HTMLElement | null = document.getElementById(
      "content-mobile-menu"
    );

    if (mobileMenu != null) {
      mobileMenu.classList.remove("animate__slideOutLeft");
      setTimeout(() => {
        mobileMenu.classList.add("animate__slideInLeft");
        mobileMenu.classList.add("open");
      }, 200);
    }
  };

  const closeMobileMenu = () => {
    setcheckOpen(!checkOpen);
    const mobileMenu = document.getElementById("content-mobile-menu");
    if (mobileMenu != null) {
      mobileMenu.classList.remove("animate__slideInLeft");
      setTimeout(() => {
        mobileMenu.classList.add("animate__slideOutLeft");
      }, 200);

      setTimeout(() => {
        mobileMenu.classList.remove("open");
      }, 1000);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-zelda nav-desktop">
        <div className="menu-desktop d-flex">
          <div className="menu-left-desktop">
            <Link className="inverted-6" to="/games">
              Games
            </Link>
            <Link className="inverted-6" to="/bosses">
              Bosses
            </Link>
            <Link className="inverted-6" to="/characters">
              Characters
            </Link>
          </div>
          <div className="logo">
            <Link to="/">
              <img
                src="/public/images/zelda-logo.png"
                alt="Zelda"
                className="logo-img"
              />
            </Link>
          </div>
          <div className="menu-right-desktop">
            <Link className="inverted-6" to="/dungeons">
              Dungeons
            </Link>
            <Link className="inverted-6" to="/monsters">
              Monsters
            </Link>
          </div>
        </div>
      </nav>
      <nav className="navbar nav-mobile">
        <div className="menu-mobile">
          <FontAwesomeIcon
            onClick={openMobileMenu}
            icon={faBars}
            className="barsMenu"
          />
        </div>
        <div
          className="content-mobile-menu animate__animated"
          id="content-mobile-menu"
        >
          <div className="close-btn">
            <FontAwesomeIcon icon={faCircleXmark} onClick={closeMobileMenu} />
          </div>
          <ul>
            <li>
              <Link
                className="inverted-6"
                to="/games"
                onClick={closeMobileMenu}
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                className="inverted-6"
                to="/bosses"
                onClick={closeMobileMenu}
              >
                Bosses
              </Link>
            </li>
            <li>
              <Link
                className="inverted-6"
                to="/dungeons"
                onClick={closeMobileMenu}
              >
                Dungeons
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo-mobile text-center">
          <Link to="/">
            <img
              src="/public/images/zelda-logo.png"
              alt="Zelda"
              className="logo-img"
            />
          </Link>
        </div>
        <div></div>
      </nav>
    </>
  );
};

import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [stickyNav, setSticky] = useState(false);
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [isNewPage, setIsNewPage] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsNewPage(location.pathname === "/");
    setClicked(false); // Reset the clicked state when a new page is entered
  }, [location]); // run the effect when the location changes

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  function handleClick() {
    setClicked(!clicked);
  }

  const navClass = stickyNav ? "nav sticky" : "nav";

  const linkClass =
    location.pathname === "/" ? "" : stickyNav ? "white" : "black";

  return (
    <nav className={`${navClass} ${linkClass}`}>
      <NavLink to="/" className="logo-link">
        <img
          src={Logo}
          alt="Logo"
          className="logo-image"
          height="30"
          width="30"
        />
      </NavLink>
      <div className="burgerBar" onClick={handleClick}>
        {clicked ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div
        id="nav-elements"
        className={clicked ? "nav-menu menuActive" : "nav-menu"}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
      </div>
    </nav>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function NavAdmin({ setAuth }) {
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

  function signOut() {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      setAuth(false);
      localStorage.removeItem("isAuth"); // reset localStorage
    }
  }

  const navClass = stickyNav ? "nav sticky" : "nav";
  const linkClass =
    location.pathname === "/" ? "" : stickyNav ? "white" : "black";

  return (
    <nav className={`${navClass} ${linkClass}`}>
      <NavLink to="/" className="logo-link">
        <img src={Logo} alt="Logo" className="logo-image" />
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
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/create" activeclassname="active">
          {<FontAwesomeIcon className="icon-plus" icon={faCirclePlus} />}
        </NavLink>
        <Link onClick={signOut} className="sign-out-btn">
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

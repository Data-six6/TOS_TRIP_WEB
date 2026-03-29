import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../styles/components_style/navbar.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/tos", label: "TOS" },
  { to: "/board", label: "Board" },
  { to: "/swipe", label: "Swipe" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-wrap">
      <nav className="navbar navbar--tos">
        <Link to="/" className="tos-brand" aria-label="TOS Trip home">
          <img src={logo} alt="TOS Trip logo" className="tos-brand__logo" />
        </Link>

        <button
          type="button"
          className="nav-toggle nav-toggle--tos"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel--tos ${isOpen ? "is-open" : ""}`}>
          <ul className="nav-links--tos">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "nav-link--tos is-active" : "nav-link--tos"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/login" className="profile-link" aria-label="Profile">
            <span className="profile-icon">
              <span className="profile-icon__head" />
              <span className="profile-icon__body" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../styles/components_style/navbar.css";
import { useNavigate } from "react-router-dom";
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/tos", label: "TOS" },
  { to: "/board", label: "Board" },
  { to: "/swipe", label: "Swipe" },
];

const adminNavItems = [
  {to: "/admin/home", label:"Home"},
  {to: "/admin/Dashboard", label:"Dashboard"},
  { to: "/admin/users", label: "Users" },
  { to: "/admin/destination", label: "Destinations" },
  { to: "/admin/board", label: "Board" },
];

function Navbar({ planClick}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const syncUser = () => {
      setCurrentUser(
        JSON.parse(localStorage.getItem("tosTripCurrentUser") || "null")
      );
    };

    syncUser();
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setCurrentUser(
      JSON.parse(localStorage.getItem("tosTripCurrentUser") || "null")
    );
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("tosTripCurrentUser");
    setCurrentUser(null);
  };
const isAdmin = currentUser?.role === "admin";
const activeNavItems = isAdmin ? adminNavItems : navItems;
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
            {activeNavItems.map((item) => (
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

          {currentUser ? (
            <div className="profile-link" aria-label="Current user">
              <span className="profile-icon">
                <span className="profile-icon__head" />
                <span className="profile-icon__body" />
              </span>
              <span>{currentUser.username}</span>
              <button type="button" className="profile-logout" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="profile-link" aria-label="Profile">
              <span className="profile-icon">
                <span className="profile-icon__head" />
                <span className="profile-icon__body" />
              </span>
            </Link>
          )}
        </div>
        {!isAdmin && <button onClick={planClick} className="nav-plan-btn">
        Wishlist 
      </button>}    
      </nav>
    </header>
  );
}

export default Navbar;

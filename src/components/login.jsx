import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mapImage from "../assets/CambodiaMap.svg";
import logo from "../assets/LOGO.svg";
import pin from "../assets/Pin_svg.svg";
import userProfile from "../assets/User_profile.svg";
import "../styles/components_style/login.css";

function Login({ isLoginPage }) {
  const navigate = useNavigate();
  const title = isLoginPage ? "LOGIN" : "SIGN UP";
  const submitLabel = isLoginPage ? "Log In" : "Create";
  const switchLabel = isLoginPage ? "Create New Account" : "Got an Account?";
  const switchLink = isLoginPage ? "/signup" : "/login";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const username = formData.username.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // basic validation
    if (!username || !email || !password) {
      setErrorMessage("Please fill in username, email, and password.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // ── SIGN UP ──
    if (!isLoginPage) {
      if (password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("tosTripUsers") || "[]");

      // block duplicate email
      if (users.some((u) => u.email === email)) {
        setErrorMessage("An account with this email already exists.");
        return;
      }

      const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        plan: [],
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("tosTripUsers", JSON.stringify(users));
      localStorage.setItem(
        "tosTripCurrentUser",
        JSON.stringify({ id: newUser.id, username, email })
      );

      setSuccessMessage("Account created. You are now logged in.");
      navigate("/");
      return;
    }

    // ── LOGIN ──
    const ADMIN = {
      email: "admin@tostrip.com",
      password: "admin123",
      username: "Admin",
    };
    if (email === ADMIN.email && password === ADMIN.password && username === ADMIN.username) {
      localStorage.setItem(
        "tosTripCurrentUser",
        JSON.stringify({ id:"admin ", username: ADMIN.username, email: ADMIN.email, role: "admin" })
      );
      setSuccessMessage("Login successful.");
      navigate("/admin");
      return;
    }
    const users = JSON.parse(localStorage.getItem("tosTripUsers") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      setErrorMessage("Incorrect email or password.");
      return;
    }

    localStorage.setItem(
      "tosTripCurrentUser",
      JSON.stringify({ id: found.id, username: found.username, email: found.email })
    );

    setSuccessMessage("Login successful.");
    navigate("/");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-panel auth-panel--form">
          <Link to="/" className="auth-close" aria-label="Close auth page">
            x
          </Link>

          <div className="auth-header">
            <img
              src={userProfile}
              alt="User profile icon"
              className="auth-avatar"
            />
            <h1>{title}</h1>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>

            <label className="auth-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            {!isLoginPage && (
              <label className="auth-field">
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
            )}

            {errorMessage && (
              <p className="auth-message auth-message--error">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="auth-message auth-message--success">{successMessage}</p>
            )}

            <div className="auth-actions">
              <button type="submit" className="auth-submit">
                {submitLabel}
              </button>
              <Link to={switchLink} className="auth-switch">
                {switchLabel}
              </Link>
            </div>
          </form>
        </div>

        <div className="auth-panel auth-panel--visual">
          <div className="auth-brand">
            <img src={logo} alt="TOS Trip logo" className="auth-brand__logo" />
            <p>Seek your journeys</p>
          </div>

          <div className="auth-map-wrap">
            <img src={mapImage} alt="Cambodia map" className="auth-map" />
            <img src={pin} alt="" className="auth-pin" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
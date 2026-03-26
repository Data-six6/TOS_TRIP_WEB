import { Link } from "react-router-dom";
import mapImage from "../assets/CambodiaMap.svg";
import logo from "../assets/LOGO.svg";
import pin from "../assets/Pin_svg.svg";
import userProfile from "../assets/User_profile.svg";
import "../styles/components_style/login.css";

function Login({ isLoginPage }) {
  const title = isLoginPage ? "LOGIN" : "SIGN UP";
  const submitLabel = isLoginPage ? "Log In" : "Create";
  const switchLabel = isLoginPage ? "Create New Account" : "Got an Account?";
  const switchLink = isLoginPage ? "/signup" : "/login";

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

          <form className="auth-form">
            <label className="auth-field">
              <span>Username</span>
              <input type="text" name="username" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" name="password" />
            </label>

            {!isLoginPage && (
              <label className="auth-field">
                <span>Confirm Password</span>
                <input type="password" name="confirmPassword" />
              </label>
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

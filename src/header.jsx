import { useContext } from "react";
import { LOGO_URL } from "./shared/constants";
import { Link } from "react-router-dom";
import ThemeContext from "./context/themeContext";

export const Header = () => {
  const { lightTheme, setCurrentTheme } = useContext(ThemeContext);

  const handleTheme = (e) => {
    setCurrentTheme(e.target.checked);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-bar-container">
        <ul className="nav-bar flex items-center">
          <li>
            <label className="switch text-white items-center">
              <input
                type="checkbox"
                checked={lightTheme}
                onChange={handleTheme}
              />
              <span className="slider round"></span>
              <p className="text-sm font-semibold text-[#f8ad3a]">Mode</p>
            </label>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

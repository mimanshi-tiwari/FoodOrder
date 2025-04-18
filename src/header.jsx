import { LOGO_URL } from "./shared/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-bar-container">
        <ul className="nav-bar">
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

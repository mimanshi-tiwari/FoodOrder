import { LOGO_URL } from "./shared/constants";

export const Header = () => { 
    return (
 <div className="header-container">
    <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
    </div>
    <div className="nav-bar-container">
        <ul className="nav-bar">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
 </div>
    );
    }
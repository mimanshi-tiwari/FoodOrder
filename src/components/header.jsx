import { useContext } from "react";
import { LOGO_URL } from "../shared/constants";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { lightTheme, setCurrentTheme } = useContext(ThemeContext);
  //* Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleTheme = (e) => {
    setCurrentTheme(e.target.checked);
  };

  let cartItemsLength = 0;
  cartItems.map((item) => {
    cartItemsLength += item?.quantity;
  });

  return (
    <div className="flex flex-row justify-between items-center h-28 p-6 bg-[#463e2d]">
      <div className="bg-transparent w-[100px] h-[100px]">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-8 text-white text-sm ">
          <li>
            <label className="items-center hover:text-[#f8ad3a]">
              <input
                type="checkbox"
                checked={lightTheme}
                onChange={handleTheme}
              />
              <span className="slider round"></span>
              <p className="text-sm text-white">Mode</p>
            </label>
          </li>
          <li className="hover:text-[#f8ad3a]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#f8ad3a]">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#f8ad3a]">
            <Link to="contact-us">Contact Us</Link>
          </li>
          <li className="hover:text-[#f8ad3a]">
            <Link to="/cart">Cart ({cartItemsLength})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

import { useContext } from "react";
import { LOGO_URL } from "../shared/constants";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { lightTheme, setCurrentTheme } = useContext(ThemeContext);
  //* Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleTheme = () => {
    setCurrentTheme(!lightTheme);
  };

  let cartItemsLength = 0;
  cartItems.map((item) => {
    cartItemsLength += item?.quantity;
  });

  return (
    <div className="flex flex-row justify-between items-center h-28 p-6 bg-[#463e2d] dark:bg-gray-900">
      <div className="bg-transparent w-[100px] h-[100px]">
        <img src={LOGO_URL} alt="logo" className="h-full" />
      </div>
      <div>
        <ul className="flex items-center gap-8 text-white text-sm ">
          <li>
            <button className='bg-[#f8ad3a] px-2 py-1 rounded dark:bg-gray-950 cursor-pointer' onClick={handleTheme}>{lightTheme? 'Dark': 'Light'}</button>
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

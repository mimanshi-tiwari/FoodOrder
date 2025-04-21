import { useSelector } from "react-redux";
import { BASE_RES_URL } from "../shared/constants";
import AddRemoveBtn from "../shared/add-remove-btn";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Cart is Empty</h1>
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-[#463e2d] text-white rounded-md">
          Go to Home
        </button>
      </Link>
    </div>
  ) : (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div
          key={item?.id + item?.name + index}
          className="m-8 flex gap-8 w-full"
        >
          <div>
            <img
              src={BASE_RES_URL + item?.imageId}
              alt={item?.name}
              className="w-[84px] rounded-md h-[84px] object-cover shadow-md"
            />
          </div>
          <div className="flex flex-row justify-around gap-2 w-9/12">
            <div className="flex gap-4 flex-col w-9/12">
              <p className="text-lg font-semibold">{item?.name}</p>
              <p className="font-semibold">
                Price: ₹{(item?.price || item?.defaultPrice) / 100}
              </p>
            </div>
            <AddRemoveBtn menuItem={item} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;
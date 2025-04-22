import { useSelector } from "react-redux";
import { BASE_RES_URL } from "../shared/constants";
import AddRemoveBtn from "../shared/add-remove-btn";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let amount = 0
   cartItems.map((item) => {
    amount += ((item.price || item.defaultPrice) * (item.quantity || 1))
  })
  amount /= 100
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
    <div className="flex h-[90vh] flex-col m-8 gap-8 text-[#463e2d]">
      <div className="shadow-lg w-4xl p-4 rounded">
      {cartItems.map((item, index) => (
        <div
          key={item?.id + item?.name + index}
          className="flex gap-4 "
           data-testid="cart-food-items"
        >
          <div>
            <img
              src={BASE_RES_URL + item?.imageId}
              alt={item?.name}
              className="w-[84px] rounded-md h-[84px] object-cover shadow-md"
            />
          </div>
          <div className="flex flex-row justify-between gap-2 w-11/12 p-4">
            <div className="flex gap-2 flex-col w-9/12 text-base font-medium">
              <p className="">{item?.name}</p>
              <p className="">
                Price: ₹{(item?.price || item?.defaultPrice) / 100}
              </p>
            </div>
            <AddRemoveBtn menuItem={item} />
          </div>
        </div>
      ))}
      </div>
      <div className="flex flex-col p-6 items-center font-semibold gap-4 w-4xl">
        <p className="flex flex-row justify-between w-6/12"> Amount <span>{amount} Rs</span></p>
        <p className="flex flex-row justify-between w-6/12"> Delivery charges <span>30 Rs</span></p>
        <p className="flex flex-row justify-between w-6/12"> Handing charges <span>5 Rs</span></p>
        <p className="flex flex-row justify-between w-6/12"> Total <span>{amount+30+5} Rs</span></p>
      </div>
    </div>
  );
};
export default Cart;
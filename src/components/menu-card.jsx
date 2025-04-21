import { BASE_RES_URL } from "../shared/constants";
import { useDispatch, useSelector } from "react-redux";
import  { addItem } from '../slice/cartSlice';
import AddRemoveBtn from "../shared/add-remove-btn";
import { useParams } from "react-router-dom";

const MenuCard = ({ resInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const isItemInCart = (resInfo) => cartItems.filter((item) => item.id === resInfo?.id);
  return (
    <div key={resInfo?.id} className="flex flex-row p-6 shadow-lg gap-2.5 rounded bg-amber-50 hover:bg-[#fffcf2a8] text-[#463e2d] " data-testid="menu-item">
      <div className="flex gap-4 flex-col w-9/12">
        <p className="text-lg font-semibold">{resInfo?.name}</p>
        <p className="text-sm">{resInfo?.description}</p>
        <p className="font-semibold">
          Price: ₹{(resInfo?.price || resInfo?.defaultPrice) / 100}
        </p>
      </div>
      <div className="relative flex justify-center w-3/12">
        <img
          src={BASE_RES_URL + resInfo?.imageId}
          alt={resInfo?.name}
          className="rounded w-[150px] h-[150px]"
        />
        <div className="px-2 py-1 bg-orange-400 text-[#463e2d] rounded-md absolute cursor-pointer -bottom-3 text-sm font-semibold">
        {isItemInCart(resInfo).length ? (
          <AddRemoveBtn menuItem={isItemInCart(resInfo)[0]} className=""/>
        ) : (
          <button
          data-testid="add-to-cart"
          className="cursor-pointer w-10 h-6"
          onClick={(event) => {
            event.stopPropagation();
            dispatch(addItem(resInfo));
          }}
        >
          Add
        </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

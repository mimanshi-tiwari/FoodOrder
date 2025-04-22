import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slice/cartSlice";

const AddRemoveBtn = ({ menuItem, className }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-0 p-0">
      <button
        className="px-2 py-1 bg-orange-400 text-[#463e2d] cursor-pointer text-sm font-semibold border-y-[#463e2d] border-x-[#463e2d] rounded-l-md h-fit dark:bg-gray-900 dark:text-white"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(addItem(menuItem));
        }}
      >
        +
      </button>
      <p className="px-2 py-1 bg-orange-400 text-[#463e2d] cursor-pointer text-sm font-semibold border-y-[#463e2d] border-x-[#463e2d] h-fit dark:bg-gray-900 dark:text-white">
        {menuItem?.quantity}
      </p>
      <button
        className="px-2 py-1 bg-orange-400 text-[#463e2d] cursor-pointer text-sm font-semibold rounded-r-md border-y-[#463e2d] border-x-[#463e2d] h-fit dark:bg-gray-900 dark:text-white"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(removeItem(menuItem));
        }}
      >
        -
      </button>
    </div>
  );
};

export default AddRemoveBtn;

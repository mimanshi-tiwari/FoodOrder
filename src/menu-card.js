import { BASE_RES_URL } from "./shared/constants";

const MenuCard = ({ resInfo }) => {
  return (
    <div key={resInfo?.id} className="menu-item">
      <div className="flex gap-4 flex-col w-9/12">
        <p className="text-lg font-semibold">{resInfo?.name}</p>
        <p className="text-sm">{resInfo?.description}</p>
        <p className="font-semibold">Price: ₹{(resInfo?.price || resInfo?.defaultPrice)/ 100}</p>
      </div>
      <div className="relative flex justify-center w-3/12">
        <img
          src={BASE_RES_URL + resInfo?.imageId}
          alt={resInfo?.name}
          className="menu-item-image"
        />
        <button className="px-2 py-1 bg-orange-400 text-[#463e2d] rounded-md absolute cursor-pointer -bottom-3 text-sm font-semibold">
          + Add
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

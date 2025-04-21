import { BASE_RES_URL } from "../shared/constants";

const ResCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData || {};
  const imageUrl = BASE_RES_URL + cloudinaryImageId;

  if (!resData) return null;
  return (
    <div className="flex flex-col gap-4 justify-self-start shadow-lg  shadow-gray-400 rounded-xl bg-[#ece2d069] hover:bg-[#e8dfd0ab] items-center p-4 w-80" data-testid="res-card">
      <div className="">
        <img src={imageUrl} alt="🍴 Restaurant" className="w-full rounded " />
      </div>
      <div className="flex flex-col gap-2 justify-start w-full text-[#463e2d] text-base">
        {/* <div className="text-base"> */}
          <div className="flex flex-row justify-between ">
            <p className="font-mediumt  w-9/12">{name}</p>
            <p
              className={`${
                avgRating > 4 ? "bg-green-200" : "bg-red-200"
              } border border-green-600 rounded px-2 py-1 w-3/12 h-fit w-fit`}
            >
              ⭐ {avgRating}
            </p>
          </div>

          <p className="font-semibold">{costForTwo}</p>
          <p className="text-sm flex gap-2"><span>🍜 </span> {cuisines?.join(", ")}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ResCard;

export const withDiscountLabel = (ResCard) => {
  return (props) => {
    const { discountTag, header, subHeader } =
      props?.resData?.aggregatedDiscountInfoV3 || {};
    return (
      <div className="relative">
        <div
          className={`absolute ${
            discountTag ? "bg-[#9cff23]" : "bg-[#fffb04]"
          } text-[#463e2d] rounded shadow px-3 py-1.5 -rotate-45 text-xs top-[10px] left-[-9px] font-semibold`}
        >
          {discountTag}
          <p className="text-[10px]">{header}</p>
          <p className="text-[10px]">{subHeader}</p>
        </div>
        <ResCard {...props} />
      </div>
    );
  };
};

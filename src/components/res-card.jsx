import { BASE_RES_URL } from "../shared/constants";

const ResCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData?.info || {};
  const imageUrl = BASE_RES_URL + cloudinaryImageId;

  if (!resData) return null;
  return (
    <div className="res-card gap-4">
      <div className="res-card-logo-container">
        <img src={imageUrl} alt="🍴 Restaurant" className="res-card-logo" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="res-details">
          <div className="res-card-name">
            <h4>{name}</h4>
            <p
              className={`${
                avgRating > 4 ? "good-rating" : "bad-rating"
              } rating`}
            >
              ⭐ {avgRating}
            </p>
          </div>

          <p className="cost">{costForTwo}</p>
          <p className="cuisines">🍜 {cuisines?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;

export const withDiscountLabel = (ResCard) => {
  return (props) => {
    const { discountTag, header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3 || {};
    return (
      <div className="relative">
        <div className={`absolute ${discountTag ? 'bg-[#9cff23]': 'bg-[#fffb04]'} text-[#463e2d] rounded shadow px-3 py-1.5 -rotate-45 text-xs top-[10px] left-[-9px] font-semibold`}>
          {discountTag}
          <p className="text-[10px]">{header}</p>
          <p className="text-[10px]">{subHeader}</p>
        </div>
        <ResCard {...props} />
      </div>
    );
  };
};

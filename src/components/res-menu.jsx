import { useState } from "react";
import { BASE_RES_URL } from "../shared/constants";
import { useParams } from "react-router-dom";
import ShimmerCards from "./shimmer-cards";
import useRestaurantMenu from "../custom-hooks/api-hooks/useRestaurantMenu";
import ResCategories from "./res-categories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showCategory, setShowCategory] = useState(0);

  if (!resInfo)
    return (
      <div className="res-menu-loading-container">
        <div>
          <ShimmerCards skeletonNumber={1} width="250px" height="250px" />
        </div>
        <div className="shimmer-row-container"></div>
      </div>
    );

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwoMessage } =
    resInfo?.[2]?.card?.card?.info || {};
  const imageUrl = BASE_RES_URL + cloudinaryImageId;
  const cardSections =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.itemCards && item?.card?.card?.itemCards.length > 0
    );

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex gap-9 rounded bg-[#ece2d069] shadow">
        <div className="res-card-logo-container p-8 flex flex-col gap-2">
          <div className="text-2xl font-semibold mb-2 text-[#463e2d]">{name}</div>
          <img src={imageUrl} data-testid="res-img" className="w-[250px] h-[250px] rounded shadow shadow-gray-400"/>
        </div>
        <div className="flex flex-col items-center gap-4 m-[84px] text-[#463e2d] text-base">
          <p>⭐ {avgRating}</p>
          <p className="text-sm flex gap-2"><span>🍜 </span> {cuisines?.join(", ")}</p>
          <p className="font-semibold">{costForTwoMessage}</p>
        </div>
      </div>
      {cardSections?.map((item, index) => (
        <ResCategories
          category={item?.card?.card}
          key={item?.card?.card?.title}
          showCategory={showCategory === index}
          setShowCategory={() => {
            if (showCategory === index) {
              setShowCategory(false);
              return;
            }
            setShowCategory(index)
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

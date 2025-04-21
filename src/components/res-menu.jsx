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
    <div className="res-menu-container">
      <div className="res-details-container">
        <div className="res-card-logo-container">
          <div className="text-2xl font-semibold mb-2">{name}</div>
          <img src={imageUrl} data-testid="res-img"/>
        </div>
        <div className="res-card-deatils-section">
          <p>{avgRating} ⭐</p>
          <p>{cuisines?.join(", ")}</p>
          <p>{costForTwoMessage}</p>
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

import { useEffect, useState } from "react";
import { BASE_RES_URL } from "./shared/constants";
import { useParams } from "react-router-dom";
import ShimmerCards from "./shimmer-cards";
import useRestaurantMenu from "./custom-hooks/api-hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo)
    return (
      <div className="res-menu-loading-container">
        <div>
        <ShimmerCards skeletonNumber={1} width="250px" height="250px" />
        </div>
        <div className="shimmer-row-container">
        </div>
      </div>
    );

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwoMessage } =
    resInfo?.[2]?.card?.card?.info || {};
  const imageUrl = BASE_RES_URL + cloudinaryImageId;
  const cardSections = resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (item) => item?.card?.card?.itemCards && item?.card?.card?.itemCards.length > 0
  );

  return (
    <div className="res-menu-container">
      <div className="res-details-container">
        <div className="res-card-logo-container">
          <h1>{name}</h1>
          <img src={imageUrl} />
        </div>
        <div className="res-card-deatils-section">
          <p>{avgRating} ⭐</p>
          <p>{cuisines?.join(", ")}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
    {cardSections?.map((item) => (
        <div key={item?.card?.card?.title} className="menu-section">
          <h1>{item?.card?.card?.title}  🔻</h1>
          <div className="menu-items">
            {item?.card?.card?.itemCards.map((item) => (
              <div key={item?.card?.info?.id} className="menu-item">
                <div className="menu-item-details">
                <h3>{item?.card?.info?.name}</h3>
                <p>{item?.card?.info?.description}</p>
                <p>Price: ₹{item?.card?.info?.price / 100}</p>
                </div>
                <img
                  src={BASE_RES_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                  className="menu-item-image"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

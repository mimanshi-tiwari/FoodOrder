import { useEffect, useState } from "react";
import ResCard, { withDiscountLabel } from "./res-card";
import ShimmerCards from "./shimmer-cards";
import { Link } from "react-router-dom";
import useRestaurantList from "../custom-hooks/api-hooks/useRestaurantList";

//* This is a higher order component (HOC) that adds a promoted label to the ResCard component. It takes the ResCard component as an argument and returns a new component that renders the ResCard with the promoted label. */
const ResCardWithDiscountLabel = withDiscountLabel(ResCard);

export const Body = () => {
  const restaurantList = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);

  useEffect(() => {
    if (!restaurantList?.length) return;
    if (!searchText.length) {
      setFilteredRestrauntList(restaurantList);
      return;
    }
    const filteredList = restaurantList?.filter(
      (res) =>
        res.info &&
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestrauntList(filteredList);
  }, [searchText, restaurantList]);

  return !restaurantList.length ? (
    <ShimmerCards skeletonNumber={50} height="400px" width="260px" />
  ) : (
    <div className="body-container dark:bg-black">
      <div className="control-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          data-testid="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="filter">
          <button
            className="top-res-btn"
            data-testid="top-res-btn"
            onClick={() => {
              const filteredList = restaurantList?.filter(
                (res) => res.info && res.info.avgRating > 4.5
              );
              setFilteredRestrauntList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="card-container">
        {filteredRestrauntList.map((res, index) =>  res?.info?.aggregatedDiscountInfoV3?.header ? (
           <Link
           to={`/restaurant/${res?.info?.id}`}
           key={res?.info?.id || index}
           className="link"
         >
            <ResCardWithDiscountLabel
              key={res?.info?.id || index}
              resData={res?.info}
            />
          </Link>
        ) : (
          <Link
            to={`/restaurant/${res?.info?.id}`}
            key={res?.info?.id || index}
            className="link"
          >
            <ResCard key={res?.info?.id || index} resData={res?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

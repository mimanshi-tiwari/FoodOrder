import { useEffect, useState } from "react";
import { ResCard } from "./res-card";
import { restrauntData } from "./shared/constants";
import ShimmerCards from "./shimmer-cards";
import { Link } from "react-router-dom";
import useRestaurantList from "./custom-hooks/api-hooks/useRestaurantList";

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
    <div className="body-container">
      <div className="control-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="filter">
          <button
            className="top-res-btn"
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
        {filteredRestrauntList.map((res, index) => (
          <Link
            to={`/restaurant/${res?.info?.id}`}
            key={res?.info?.id || index}
            className="link"
          >
            <ResCard key={res?.info?.id || index} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

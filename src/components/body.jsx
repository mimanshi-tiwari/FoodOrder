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
    <div className="flex flex-col gap-8 m-6">
      <div className="flex flex-row gap-4 w-9/12">
        <input
          type="text"
          placeholder="Search..."
          className="border border-[#463e2d] dark:border-gray-900 rounded h-8 p-2 text-xs"
          data-testid="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="filter">
          <button
            className="rounded h-8 p-2 flex items-center text-white bg-[#463e2d] dark:bg-gray-900 font-normal text-xs"
            data-testid="top-res-btn"
            onClick={() => {
              const filteredList = restaurantList?.filter(
                (res) => res.info && res.info.avgRating > 4
              );
              setFilteredRestrauntList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-6">
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

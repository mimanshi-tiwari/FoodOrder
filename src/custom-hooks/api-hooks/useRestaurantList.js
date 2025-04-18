import { useEffect, useState } from "react"

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([])
    useEffect(() => {
        fetchData()
    }
    , [])
    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.error('Failed to fetch rest, error: ', err)
        }
    }
    return restaurantList
}

export default useRestaurantList
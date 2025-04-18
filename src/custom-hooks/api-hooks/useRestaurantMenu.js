import { useEffect, useState } from "react"

const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await response.json();
            setResInfo(json?.data?.cards);
        } catch (err) {
            console.error('Failed to fetch menu, error: ', err)
        }
    }

    return resInfo;
}

export default useRestaurantMenu;
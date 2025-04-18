import { BASE_RES_URL } from "./shared/constants";

export const ResCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } = resData?.info || {};
    const imageUrl = BASE_RES_URL + cloudinaryImageId;

   if (!resData) return null
    return (
        <div className="res-card">
            <div className="res-card-logo-container">
            <img src={imageUrl} alt="🍴 Restaurant" className="res-card-logo"/>
            </div>
            <div className="res-details">
                <div className="res-card-name">
            <h4>{name}</h4>
            <p className={`${avgRating > 4 ? "good-rating": "bad-rating"} rating`}>⭐ {avgRating}</p>
            </div>
            
            <p className="cost">💲 {costForTwo}</p>
            <p className="cuisines">🍜 {cuisines?.join(", ")}</p>
            </div>
        </div>
    );
}
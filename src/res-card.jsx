import { BASE_RES_URL } from "./shared/constants";

export const ResCard = ({ resData }) => {
    const { name, cuisines, imageId, avgRating, costForTwo } = resData;
    const imageUrl = BASE_RES_URL + imageId;

    return (
        <div className="res-card">
            <div className="res-card-logo-container">
            <img src={imageUrl} alt="Restaurant" className="res-card-logo"/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
        </div>
    );
}
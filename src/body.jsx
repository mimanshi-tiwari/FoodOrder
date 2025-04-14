import { useState } from 'react';
import { ResCard } from "./res-card";
import { restrauntData } from "./shared/constants";

export const Body = () => {
    const [restrauntList, setRestrauntList] = useState(restrauntData ?? []);
    console.log(<ResCard />);
     return (
        <div className="body-container">
            <div className="control-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Search</button>
                <div className="filter">
                    <button className="top-res-btn" onClick={() => {
                        const filteredList = restrauntList.filter(res => res.avgRating > 4);
                        setRestrauntList(filteredList);
                    }}>To Rated Restaurants</button>
                </div>
            </div>
            <div className="card-container">
                {restrauntList.map((res) => 
                <ResCard key={res.id} resData={res}/>)}
            </div>
        </div>
    );
}
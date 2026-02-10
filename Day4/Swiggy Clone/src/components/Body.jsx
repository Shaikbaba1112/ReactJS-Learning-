import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { santoshNagarHotelList , charminarHotelList } from "../utils/mockData";

export function Body(){
    let [restaurantList, setRestaurantList] = useState(santoshNagarHotelList);
    return (<div id="body">        
        <button id="filterBtn" onClick={()=>{
            let filteredArr = santoshNagarHotelList.filter((item)=>{
                return item.rating > 4.5;
            });
            setRestaurantList(charminarHotelList);
        }}>filter button</button>
            {
            restaurantList.map((item) => (
            <RestaurantCard key={item.id} santoshNagarHotelList={item} />
            ))
        }
    </div>);
}


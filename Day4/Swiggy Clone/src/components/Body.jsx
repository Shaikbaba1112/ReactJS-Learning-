import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { santoshNagarHotelList , charminarHotelList , swiggy} from "../utils/MockData";
import  Shimmer  from "./Shimmer";



export function Body(){
    let [restaurantList, setRestaurantList] = useState(swiggy);
    useEffect(()=>{
        console.log("data called");
        catData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3472352&lng=78.5083082&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    },[]);
    
    async function catData(url){
        try {
            const rowData = await fetch(url);
            const finalData = await rowData.json();
            setRestaurantList(
                finalData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            // console.log(finalData);
        } catch (error) {
            console.log("not found", error);
        }
   
}

if(restaurantList.length === 1){
    return <Shimmer />;
}
    return (<div id="body">        
        <button id="filterBtn" onClick={()=>{
            let filteredArr = santoshNagarHotelList.filter((item)=>{
                return item.rating > 4.5;
            });
            setRestaurantList(filteredArr);
        }}>filter button</button>
            {
            restaurantList.map((item) => (
            <RestaurantCard key={item.info.id} santoshNagarHotelList={item} />
            ))
        }
    </div>);
}


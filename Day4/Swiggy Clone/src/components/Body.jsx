import { RestaurantCard } from "./RestaurantCard";
import { santoshNagarHotelList } from "../utils/mockData";

export function Body(){
    return (<div id="body">
        {/* {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurantList={restaurant} />
        ))} */}
        {
            santoshNagarHotelList.map((item) => (
                <RestaurantCard key={item.id} santoshNagarHotelList={item} />
            ))
        }
    </div>);
}


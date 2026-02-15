import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantPage = () => {
    useEffect(()=>{
        fetchRestaurantPage("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3472352&lng=78.5083082&restaurantId=726147&catalog_qa=undefined&submitAction=ENTERY");
    },[]);

    async function fetchRestaurantPage(url){
        try {
            const rawData = await fetch(url);
            console.log(rawData);
            const data = await rawData.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const useParamsValue = useParams();
    console.log(useParamsValue.resId)
    return(
        <div style={{margin:"200px"}}>
            Restaurant Name:{useParamsValue.resId}
        </div>
    );
}
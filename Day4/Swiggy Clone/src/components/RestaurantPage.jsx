import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantPage = () => {
    const { resId } = useParams();
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        if (!resId) return;
        console.log("Fetching menu data for restaurant ID:", resId);
        fetchRestaurantPage(resId);
    }, [resId]);

    async function fetchRestaurantPage(restaurantId) {
        try {
            const url = `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3472352&lng=78.5083082&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTERY`;
            const rawData = await fetch(url);
            const data = await rawData.json();
            console.log("Fetched menu data", data);
            setMenuData(data);
        } catch (error) {
            console.log("Error while fetching menu data", error);
        }
    }

    return (
        <div style={{ margin: "200px" }}>
            <h2>Restaurant ID: {resId}</h2>
            {menuData ? (
                <div>
                    <p>Menu fetched. Sections: {Object.keys(menuData).length}</p>
                </div>
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};
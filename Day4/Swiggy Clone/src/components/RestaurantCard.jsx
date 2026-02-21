import { Link } from "react-router-dom";

export function RestaurantCard(props){
    const id = props.santoshNagarHotelList.info.id;
    return(
        <Link to={`/restaurant/${id}`} className="restaurentCard-link">
        <div className="restaurentCard">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.santoshNagarHotelList.info.cloudinaryImageId}`} alt={props.santoshNagarHotelList.info.name} className="cardImg"/>
            <h2>{props.santoshNagarHotelList.info.name}</h2>
            <h3>{props.santoshNagarHotelList.info.avgRating}star. {props.santoshNagarHotelList.info.sla.deliveryTime}mins</h3>
            <h4>{props.santoshNagarHotelList.info.costForTwo}</h4>
            <p>{props.santoshNagarHotelList.info.cuisines.join(", ")}</p>
            <p>{props.santoshNagarHotelList.info.locality}</p>
        </div>
        </Link>
    );
}
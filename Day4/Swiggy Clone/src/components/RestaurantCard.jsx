export function RestaurantCard(props){
    return(
        <div className="restaurentCard">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.santoshNagarHotelList.info.cloudinaryImageId}`} alt={props.santoshNagarHotelList.info.name} className="cardImg"/>
            <h2>{props.santoshNagarHotelList.info.name}</h2>
            <h3>{props.santoshNagarHotelList.info.avgRating}star. {props.santoshNagarHotelList.info.sla.delieveryTime}</h3>
            <h4>{props.santoshNagarHotelList.info.costForTwo}</h4>
            <p>{props.santoshNagarHotelList.info.cuisines.join(", ")}</p>
            <p>{props.santoshNagarHotelList.info.locality}</p>
        </div>
    );
}
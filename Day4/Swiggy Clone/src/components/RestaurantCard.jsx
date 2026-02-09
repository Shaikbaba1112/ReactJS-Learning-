export function RestaurantCard(props){
    return(
        <div className="restaurentCard">
            <img src={props.santoshNagarHotelList.imgLink} alt={props.santoshNagarHotelList.name} className="cardImg"/>
            <h2>{props.santoshNagarHotelList.name}</h2>
            <h3>{props.santoshNagarHotelList.rating}star. {props.santoshNagarHotelList.delieveryTime}</h3>
            <h4>{props.santoshNagarHotelList.costForTwo}</h4>
            <p>{props.santoshNagarHotelList.cuisine.join(", ")}</p>
            <p>{props.santoshNagarHotelList.location}</p>
        </div>
    );
}
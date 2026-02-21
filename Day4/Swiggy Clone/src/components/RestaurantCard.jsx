const RestaurantCard = ({hotelData}) => {

  return (
    <div id={hotelData.info.id} className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${hotelData.info.cloudinaryImageId}`}
        />
      </div>
      <h3 className="res-title">{hotelData.info.name}</h3>
      <h4>{hotelData.info.cuisines.join(", ")}</h4>
      <h4>⭐️ {hotelData.info.avgRating} Stars</h4>
      <h4>
        {hotelData.info.sla.deliveryTime} mins | {hotelData.info.costForTwo}
      </h4>
      <h4>📍{hotelData.info.locality}</h4>
    </div>
  );
};

export default RestaurantCard;
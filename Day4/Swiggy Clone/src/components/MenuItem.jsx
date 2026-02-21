const MenuItem = ({ menuItem, dummyData }) => {
  return (
    <div className="menu-item-card">
      <div>
        <h1>{menuItem.name}</h1>
        <p>Price: ₹{menuItem.price ? menuItem.price / 100 : menuItem.defaultPrice / 100}</p>
        <p>
          🌟 {menuItem.ratings.aggregatedRating.rating} (
          {menuItem.ratings.aggregatedRating.ratingCount})
        </p>
        <p>{menuItem.description} {dummyData}</p>
      </div>
      <div>
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_138/${menuItem.imageId}`}
          alt={menuItem.name} className="menu-item-image"
        />
      </div>
    </div>
  );
};

export default MenuItem;
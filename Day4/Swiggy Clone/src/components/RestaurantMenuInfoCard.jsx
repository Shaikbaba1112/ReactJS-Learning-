const RestaurantMenuInfoCard = ({ menu }) => {
      const { name, avgRatingString, totalRatingsString, cuisines } =
    menu?.data?.cards[2]?.card?.card?.info || {};
    return (
        <div>
        <h1>{name}</h1>
        <p>
          🌟 {avgRatingString} ({totalRatingsString})
        </p>
        <p>{cuisines?.join(", ")}</p>
      </div>
    )
}

export default RestaurantMenuInfoCard;
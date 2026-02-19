const RestaurantCategory = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <p>{category.description}</p>
    </div>
  );
};

export default RestaurantCategory;
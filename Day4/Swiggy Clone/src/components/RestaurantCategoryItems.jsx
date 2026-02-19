const RestaurantCategoryItems = ({ items }) => {
  return (
    <div className="category-items">
      {items.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItems;
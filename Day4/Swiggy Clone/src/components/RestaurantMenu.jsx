import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const dummyData = "props drilling";

  if (!menu) {
    return <h1 style={{ padding: "200px" }}>Loading...</h1>;
  }

  const categories =
    menu?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      },
    ) || [];
  console.log("categories", categories);

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingTop: "100px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantMenuInfoCard menu={menu} />
      <h2>Menu:</h2>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
          setIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
          showItems={index === showIndex ? true : false}
          dummyData={dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
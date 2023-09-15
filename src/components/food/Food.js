import { useState } from "react";
import "./food.css";
import FoodCategory from "../foodCategory/FoodCategory";

const Food = ({ card, veg, menuFooter }) => {
  console.log(card.card.card, "hhhh");
  const { title, itemCards } = card.card.card;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="food-container">
      <div className="food-type"></div>
      <div className="collapsible-div">
        <h2 style={{ marginBottom: 10 }}>
          {title && title + " " + `(${itemCards?.length})`}
        </h2>
        <button className="collapsible-btn" onClick={toggleSection}>
          {title && <span>{isOpen ? "-" : "+"}</span>}
        </button>
      </div>
      {isOpen &&
        itemCards?.map((item) => (
          <div key={item.card.info.id}>
            <FoodCategory itemCards={item} veg={veg} />
          </div>
        ))}
    </div>
  );
};

export default Food;

import "./food-category.css";

const FoodCategory = ({ itemCards, veg }) => {
  const { info } = itemCards?.card;
  console.log(info, "abcd");
  return (
    <div>
      <div className="food-category">
        <div className="description">
          <div
            className="square"
            style={{
              backgroundColor: info.isVeg ? "green" : "red",
            }}
          >
            <span className="dot"></span>
          </div>
          <h3>{info.name}</h3>
          <h2 className="price">
            <span className="money">₹</span>
            {info.price / 100}
          </h2>
        </div>
        {info.nextAvailableAtMessage == undefined ? (
          <button className="btn">Add</button>
        ) : (
          <div className="message">
            <p>{info.nextAvailableAtMessage.split(",")[0]}</p>
            <p>{info.nextAvailableAtMessage.split(",")[1]}</p>
          </div>
        )}
      </div>
      <hr className="border" />
    </div>
  );
};

export default FoodCategory;

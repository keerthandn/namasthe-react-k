import Shimmer from "../shimmer/Shimmer";
import "./restoMenu.css";
import { useParams } from "react-router-dom";
import star from "../../images/star.png";
import Coupon from "../coupon/Coupon";
import FoodCategory from "../foodCategory/FoodCategory";
import Food from "../food/Food";
import MenuFooter from "../menu-footer/MenuFooter";
import useRestoMenu from "../../utils/useRestoMenu";

const RestoMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestoMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const info = resInfo?.cards[0]?.card?.card.info;
  const {
    name,
    cuisines,
    costForTwoMessage,
    sla,
    avgRating,
    totalRatingsString,
    areaName,
    aggregatedDiscountInfo,
    aggregatedDiscountInfoV2,
    veg = false,
  } = resInfo?.cards[0]?.card?.card.info || {};

  // const { itemCards, title } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card || {};

  const foodArray = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const menuFooter = foodArray.cards.slice(-2);
  console.log(resInfo, "ewgwuig3ewrg");
  return (
    <div className="resto-menu-container">
      <h5>Home/{info.city + "/" + info.name}</h5>
      <div className="resto-menu">
        <div>
          <h1>{name}</h1>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p className="cuisines">
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>
        <div className="ratings">
          <div className="star-ratings">
            <div className="image">
              <img src={star} width={20} height={20} alt="ratings" />
            </div>
            <div className="avgRate">{avgRating}</div>
          </div>
          <hr />
          <div className="star-ratings">
            <p>{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="coupon-container">
        <div className="coupon-header">
          <p className="time">
            <span className="timer">🕒</span>
            {sla.slaString}
          </p>

          <div className="cost-for-two">
            {/* <span className="rupee">₹</span> */}
            <p>{costForTwoMessage}</p>
          </div>
        </div>
      </div>
      <Coupon
        aggregatedDiscountInfo={aggregatedDiscountInfo}
        aggregatedDiscountInfoV2={aggregatedDiscountInfoV2}
      />

      <p style={{ color: veg ? "green" : "red" }}>
        {veg ? "PURE VEG" : "NON VEG"}
      </p>
      {foodArray.cards.slice(1).map((card, index) => (
        <div key={card.card.card.title}>
          <Food veg={veg} card={card} />
        </div>
      ))}

      <MenuFooter menuFooter={menuFooter} />
    </div>
  );
};

export default RestoMenu;

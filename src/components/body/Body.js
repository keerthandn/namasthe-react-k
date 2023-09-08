import RestoContainer from "../resto-container/RestoContainer";
import Search from "../../search/Search";
import "./body.css";
import { restaurants } from "../../utils/mokData.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  return (
    <div className="body">
      {/* <Search /> */}
      <div className="filter">
        <button
          className="filte-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <RestoContainer restaurants={listOfRestaurants} />
    </div>
  );
};

export default Body;

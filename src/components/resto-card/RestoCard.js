import "./resto-card.css";
import { CDN_URL } from "../../utils/constant";

const RestoCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  return (
    <div className="resto-card">
      <div className="img-container">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          width="100"
          height="100"
          alt="card"
        />
      </div>
      <h3>{name}</h3>
      <div className="starRate">
        <span>{avgRating} star</span>
      </div>
      <div className="cuisine">
        <p>{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default RestoCard;

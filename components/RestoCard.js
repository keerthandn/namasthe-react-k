import "./resto-card.css";
const RestoCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  return (
    <div className="resto-card">
      <div className="img-container">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          width="100"
          height="100"
          alt="card"
        />
      </div>
      <h3>{name}</h3>
      <div className="starRate">
        <span>{avgRating} star</span>
      </div>
      <p>{cuisines.join(",")}</p>
    </div>
  );
};

export default RestoCard;

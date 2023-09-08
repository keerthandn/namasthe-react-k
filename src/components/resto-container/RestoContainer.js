import RestoCard from "../resto-card/RestoCard";
import "./resto-container.css";
const RestoContainer = ({ restaurants }) => {
  return (
    <div className="resto-container">
      {restaurants.map((item) => {
        return <RestoCard key={item.info.id} resData={item} />;
      })}
    </div>
  );
};

export default RestoContainer;

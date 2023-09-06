import RestoCard from "./RestoCard";
import "./resto-container.css";
import { restaurants } from "./data.js";
const RestoContainer = () => {
  return (
    <div className="resto-container">
      {restaurants.map((item) => {
        return <RestoCard key={item.info.id} resData={item} />;
      })}
    </div>
  );
};

export default RestoContainer;

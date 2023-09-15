import { Link } from "react-router-dom";
import RestoCard from "../resto-card/RestoCard";
import "./resto-container.css";
const RestoContainer = ({ restaurants }) => {
  return (
    <div className="resto-container">
      {restaurants.map((item) => (
        <Link
          className="link"
          key={item.info.id}
          to={"/restaurants/" + item.info.id}
        >
          <RestoCard resData={item} />
        </Link>
      ))}
    </div>
  );
};

export default RestoContainer;

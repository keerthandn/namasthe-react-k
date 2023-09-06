import RestoContainer from "./RestoContainer";
import Search from "./Search";
import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestoContainer />
    </div>
  );
};

export default Body;

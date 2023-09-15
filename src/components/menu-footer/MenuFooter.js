import { CDN_URL } from "../../utils/constant";
import "./menu-footer.css";

const MenuFooter = ({ menuFooter }) => {
  return (
    <div className="menu-footer">
      <div className="licence">
        <div className="image-div">
          <img
            src={CDN_URL + menuFooter[0].card.card.imageId}
            height="30"
            width="50"
          />
        </div>
        <div>{menuFooter[0].card.card.text[0]}</div>
      </div>
      <hr />
      <div className="address">
        <p className="resto-name">{menuFooter[1].card.card.name}</p>
        <p className="outlet">(Outlet:{menuFooter[1].card.card.name})</p>
        <p className="complete-address">
          {menuFooter[1].card.card.completeAddress}
        </p>
      </div>
    </div>
  );
};

export default MenuFooter;

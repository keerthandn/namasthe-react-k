import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

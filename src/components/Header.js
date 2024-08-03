import { HEADER_IMG } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            alt="app-logo"
            className="app-logo"
            src={HEADER_IMG}
          />
        </div>
        <div className="links-container">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
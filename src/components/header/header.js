import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img className="header__logo-image" src={logo} alt="BrainFlix logo" />
        </NavLink>
      </div>
      <div className="header__search">
        <img
          className="header__search-icon"
          src={searchIcon}
          alt="search icon"
        ></img>
        <input
          className="header__search-bar"
          type="text"
          placeholder="Search"
        />
        <div className="header__avatar-container">
          <img className="header__avatar" src={avatar} alt="User avatar" />
        </div>
      </div>
      <div className="header__button-container">
        <img
          className="header__button-icon"
          src={uploadIcon}
          alt="upload arrow"
        ></img>
        <NavLink to="/upload" className="header__button">
          <button type="button" className="header__button">
            UPLOAD
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

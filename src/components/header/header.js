import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-image" src={logo} alt="BrainFlix logo" />
        </Link>
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
        <Link to="/upload" className="header__button">
          <button type="button" className="header__button">
            UPLOAD
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

import "./header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={logo} alt="Brainflix logo" />
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
        <button className="header__button" type="button">
          UPLOAD
        </button>
      </div>
    </header>
  );
}

export default Header;

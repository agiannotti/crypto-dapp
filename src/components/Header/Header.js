import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={""} alt="" className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={SearchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item, or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img className={WbSunnyIcon} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;

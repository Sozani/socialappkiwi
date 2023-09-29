import React from "react";
import "./SearchLogo.css";
import Logo from "../../../images/logo.png";
import { RiSearchLine } from "react-icons/ri";
const SearchLogo = () => {
  return (
    <div className="searchLogo">
      <img src={Logo} className="logo" alt="" />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <RiSearchLine />
        </div>
      </div>
    </div>
  );
};

export default SearchLogo;

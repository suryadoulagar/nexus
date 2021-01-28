import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* logged-in user avatar  */}
        <Avatar className="header__avatar" alt="surya" src="surya" />

        {/* time icon */}
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />

        <input placeholder="search your nexus" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;

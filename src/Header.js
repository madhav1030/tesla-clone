import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1636444584~hmac=9d06c72f1a1d1c7baaa657d5554aad6a"
          alt=""
        />
        <div className="header__search">
          {<SearchIcon />}
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" />
        <HeaderOption title="My Network" />
        <HeaderOption title="Jobs" />
        <HeaderOption title="Messaging" />
        <HeaderOption title="Notifications" />
      </div>
    </div>
  );
}

export default Header;

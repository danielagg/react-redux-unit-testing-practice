import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrapper">
        <div className="logo" data-test="logo">
          <h1>Logo</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

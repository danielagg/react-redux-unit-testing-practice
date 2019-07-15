import React from "react";
import "./Header.scss";
import PropTypes from "prop-types";

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

Header.propTypes = {
  title: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number,
      isOnline: PropTypes.bool.isRequired
    })
  )
};

export default Header;

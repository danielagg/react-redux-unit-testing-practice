import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonText, emitEvent } = props;

  const onClick = () => {
    if (emitEvent) {
      emitEvent();
    }
  };

  return (
    <button data-test="buttonComponent" onClick={onClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitEvent: PropTypes.func
};

export default Button;

/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';

/** Stylesheets */
import './Button.scss';

const Button = ({ text, ...buttonProps }) => {
  return (
    <button className="buttonHolder" {...buttonProps}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, isSubmit, text, onClick }) => (
  <button className={className} type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  isSubmit: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  isSubmit: false,
  text: 'Button',
  onClick: () => {},
};

export default Button;

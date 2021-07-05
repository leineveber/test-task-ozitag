import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, value, type, name, id, placeholder, onChange }) => (
  <input
    className={className}
    value={value}
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
};

export default Input;

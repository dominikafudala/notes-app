import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, colorTheme }) => (
  <button
    className={`${secondary ? styles.secondary : styles.button} ${styles[colorTheme]}`}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.bool,
  colorTheme: PropTypes.oneOf(['pink', 'salmon', 'green', 'orange']),
};

Button.defaultProps = {
  children: 'Hi',
  secondary: false,
  colorTheme: 'pink',
};

export default Button;

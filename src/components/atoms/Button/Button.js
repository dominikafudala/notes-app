import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const colorThemes = {
  pink: styles.pink,
  salmon: styles.salmon,
  green: styles.green,
  orange: styles.orange,
};

const Button = ({ children, secondary, colorTheme }) => (
  <button
    className={`${secondary ? styles.secondary : styles.button} ${colorThemes[colorTheme]}`}
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

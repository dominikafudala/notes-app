import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, colorTheme }) => (
  <button className={`${secondary ? styles.secondary : styles.button} ${styles[colorTheme]}`} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.bool,
  colorTheme: PropTypes.oneOf(['note', 'twitter', 'green', 'article']),
};

Button.defaultProps = {
  children: 'Hi',
  secondary: false,
  colorTheme: 'note',
};

export default Button;

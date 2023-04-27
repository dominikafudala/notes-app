import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, colorTheme, onClick, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${secondary ? styles.secondary : styles.button} ${styles[colorTheme]}`} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.bool,
  colorTheme: PropTypes.oneOf(['note', 'twitter', 'green', 'article']),
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: 'Hi',
  secondary: false,
  colorTheme: 'note',
  onClick: null,
  type: 'button',
};

export default Button;

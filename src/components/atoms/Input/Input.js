import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ placeholder, search }) => (
  <input className={search ? styles.search : styles.input} placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

Input.defaultProps = {
  search: false,
};

export default Input;

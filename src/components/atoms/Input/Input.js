/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ placeholder, search, textarea, name, type }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !textarea ? <input type={type} name={name} className={search ? styles.search : styles.input} placeholder={placeholder} /> : <textarea name={name} placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  search: PropTypes.bool,
  textarea: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  search: false,
  textarea: false,
  type: 'text',
};

export default Input;

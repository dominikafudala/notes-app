import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ children, big }) => <h1 className={big ? styles.xl : styles.l}>{children}</h1>;

Heading.propTypes = {
  children: PropTypes.string,
  big: PropTypes.bool,
};

Heading.defaultProps = {
  children: 'This is heading',
  big: false,
};

export default Heading;

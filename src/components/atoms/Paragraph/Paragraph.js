import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

// eslint-disable-next-line max-len
const Paragraph = ({ children, upper }) => <p className={upper ? styles.upper : undefined}>{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  upper: PropTypes.bool,
};

Paragraph.defaultProps = {
  children: 'This is paragraph',
  upper: false,
};

export default Paragraph;

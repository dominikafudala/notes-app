import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.module.scss';

const Paragraph = ({ children }) => <p>{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.string,
};

Paragraph.defaultProps = {
  children: 'This is paragraph',
};

export default Paragraph;

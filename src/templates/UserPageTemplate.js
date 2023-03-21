import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'contexts/ThemeContext';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, type }) => (
  <ThemeContext.Provider value={type}>
    <Sidebar />
    {children}
  </ThemeContext.Provider>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  type: 'note',
};

export default UserPageTemplate;

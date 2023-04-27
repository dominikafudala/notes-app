import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'contexts/ThemeContext';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import NewItemForm from 'components/organisms/NewItemForm/NewItemForm';
import styles from './UserPageTemplate.module.scss';

const UserPageTemplate = ({ children, type }) => (
  <ThemeContext.Provider value={type}>
    <Sidebar />
    <section className={styles.main}>{children}</section>
    <NewItemForm />
  </ThemeContext.Provider>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  type: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  type: 'note',
};

export default UserPageTemplate;

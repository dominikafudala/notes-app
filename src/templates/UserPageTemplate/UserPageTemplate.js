import React from 'react';
import PropTypes, { element } from 'prop-types';
import ThemeContext from 'contexts/ThemeContext';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styles from './UserPageTemplate.module.scss';

const UserPageTemplate = ({ children, type, heading }) => (
  <ThemeContext.Provider value={type}>
    <Sidebar />
    <main className={styles.main}>
      <Input placeholder="search" search />
      <Heading>{heading}</Heading>
      <Paragraph>{`12 ${heading}`}</Paragraph>
      <div className={styles.grid}>{children}</div>
    </main>
  </ThemeContext.Provider>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
  type: PropTypes.oneOf(['note', 'twitter', 'article']),
  heading: PropTypes.string.isRequired,
};

UserPageTemplate.defaultProps = {
  type: 'note',
};

export default UserPageTemplate;

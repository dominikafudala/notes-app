import React, { useContext } from 'react';

import ThemeContext from 'contexts/ThemeContext';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logo from 'assets/icons/logo.svg';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <div className={styles.logo}>
        <img src={logo} alt="FavNote logo" />
      </div>
      <ul className={styles.linkWrapper}>
        <li>
          {' '}
          <ButtonIcon exact as={NavLink} to="/" icon={penIcon} iconName="pen" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} iconName="twitter" />
        </li>
        <li>
          {' '}
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} iconName="bulb" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/logout" icon={logoutIcon} iconName="logout" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

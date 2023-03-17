import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <div className={styles.wrapper}>
    <p className={styles.logo}>Logo</p>
    <ButtonIcon exact as={NavLink} to="/" icon={penIcon} iconName="pen" activeclass="active" />
    <ButtonIcon
      as={NavLink}
      to="/twitters"
      icon={twitterIcon}
      iconName="twitter"
      activeclass="active"
    />
    <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} iconName="bulb" activeclass="active" />
    <ButtonIcon as={NavLink} to="/" icon={logoutIcon} iconName="logout" activeclass="active" />
  </div>
);

export default Sidebar;

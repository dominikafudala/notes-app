import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ as: Component, to, icon, iconName, active }) => {
  const classValue = Component === 'button' ? `${active ? styles.active : styles.inactive} ${styles.buttonIcon}`
    : (navData) => (navData !== undefined && navData.isActive ? `${styles.active} ${styles.buttonIcon}` : `${styles.inactive} ${styles.buttonIcon}`); // prettier-ignore
  return (
    <Component to={to} type="button" className={classValue}>
      <img
        className={iconName === 'bulb' ? styles.biggerIcon : styles.icon}
        src={icon}
        alt={iconName}
      />
    </Component>
  );
};

ButtonIcon.propTypes = {
  as: PropTypes.elementType,
  to: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  as: 'button',
  to: '#',
  active: false,
};

export default ButtonIcon;

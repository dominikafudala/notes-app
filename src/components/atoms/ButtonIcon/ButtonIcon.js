import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ as: Component, to, icon, iconName, active }) => (
  <Component
    to={to}
    type="button"
    className={`${styles.buttonIcon} ${active ? styles.active : styles.inactive}`}
  >
    <img
      className={iconName === 'bulb' ? styles.biggerIcon : styles.icon}
      src={icon}
      alt={iconName}
    />
  </Component>
);

ButtonIcon.propTypes = {
  as: PropTypes.elementType,
  to: PropTypes.string,
  icon: PropTypes.element.isRequired,
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  as: <button type="button" aria-label="button" />,
  to: '#',
  active: false,
};

export default ButtonIcon;

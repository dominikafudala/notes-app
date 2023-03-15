import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ icon, iconName, active }) => (
  <button
    type="button"
    className={`${styles.buttonIcon} ${active ? styles.active : styles.inactive}`}
  >
    <img className={styles.icon} src={icon} alt={iconName} />
  </button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  active: false,
};

export default ButtonIcon;

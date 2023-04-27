import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'contexts/ThemeContext';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ as: Component, to, icon, iconName, active, round, onClick }) => {
  const theme = useContext(ThemeContext);
  const classValue = Component === 'button' ? `${active ? styles.active : styles.inactive} ${styles.buttonIcon} ${styles[theme]} ${round && styles.round}`
    : (navData) => (navData !== undefined && navData.isActive ? `${styles.active} ${styles.buttonIcon}` : `${styles.inactive} ${styles.buttonIcon}`); // prettier-ignore
  return (
    <Component to={to} type="button" className={classValue} onClick={onClick}>
      <img className={iconName === 'bulb' ? styles.biggerIcon : styles.icon} src={icon} alt={iconName} />
    </Component>
  );
};

ButtonIcon.propTypes = {
  as: PropTypes.elementType,
  to: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
  round: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  as: 'button',
  to: '#',
  active: false,
  round: false,
  onClick: null,
};

export default ButtonIcon;

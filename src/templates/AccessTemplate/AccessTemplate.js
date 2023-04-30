import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/icons/logo.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import notesIcon from 'assets/icons/pen.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import styles from './AccessTemplate.module.scss';

const AccessTemplate = ({ buttonText, linkTo, linkText, headingText, onSubmitFn }) => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <img className={styles.logo} src={logo} alt="Favnote logo" />
      <Heading>Your new favourite online notes experience</Heading>
      <div className={styles.icons}>
        <img src={notesIcon} alt="Pen icon" />
        <img src={twitterIcon} alt="Twitter icon" />
        <img src={bulbIcon} alt="Bulb icon" />
      </div>
      <form onSubmit={onSubmitFn}>
        <Heading big>{headingText}</Heading>
        <div className={styles.inputs}>
          <Input placeholder="username" name="username" />
          <Input placeholder="password" name="password" type="password" />
        </div>
        <div className={styles.actions}>
          <Button type="submit">{buttonText}</Button>
          <a href={linkTo}>{linkText}</a>
        </div>
      </form>
    </main>
  </div>
);

AccessTemplate.propTypes = {
  buttonText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  onSubmitFn: PropTypes.func.isRequired,
};

export default AccessTemplate;

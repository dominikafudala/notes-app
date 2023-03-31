/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import ThemeContext from 'contexts/ThemeContext';
import styles from './Card.module.scss';

const Card = ({ content }) => {
  const theme = useContext(ThemeContext);
  const dateNow = new Date();
  const dateCreated = new Date(content.created);
  const difference = Math.abs(dateNow - dateCreated);
  const daysFromCreated = Math.ceil(difference / (1000 * 3600 * 24));

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper} onClick={() => navigate(`/${theme}s/${content.id}`)}>
      <div className={`${styles.heading} ${styles[theme]}`}>
        <Heading>{content.title}</Heading>
        <div className={styles.date}>
          {`${daysFromCreated} `}
          days
        </div>
        {theme === 'twitter' && <img className={styles.twitterAvatar} src={`https://unavatar.io/${content.twitterName}`} alt="Twitter logo" />}
        {theme === 'article' && (
          <a className={styles.articleLink} href={content.articleUrl} aria-label="Link to article">
            <span className="visually-hidden">Link to article </span>
          </a>
        )}
      </div>
      <div className={styles.info}>
        <Paragraph>{content.content}</Paragraph>
        <Button secondary>Remove</Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Card;

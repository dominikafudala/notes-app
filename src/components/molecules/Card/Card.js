import React, { useContext } from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import ThemeContext from 'contexts/ThemeContext';
import styles from './Card.module.scss';

const Card = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.heading} ${styles[theme]}`}>
        <Heading>This is heading</Heading>
        <div className={styles.date}>3 days</div>
        {theme === 'twitter' && (
          <img
            className={styles.twitterAvatar}
            src="https://unavatar.io/kikobeats"
            alt="Twitter logo"
          />
        )}
        {theme === 'article' && (
          <a
            className={styles.articleLink}
            href="https://twitter.com/"
            aria-label="Link to article"
          >
            <span className="visually-hidden">Link to article </span>
          </a>
        )}
      </div>
      <div className={styles.info}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio omnis
          accusantium quibusdam nihil placeat voluptatem itaque ex blanditiis excepturi doloremque,
          laudantium aspernatur harum sequi eveniet inventore magni repellat aut.
        </Paragraph>
        <Button secondary>Remove</Button>
      </div>
    </div>
  );
};

export default Card;

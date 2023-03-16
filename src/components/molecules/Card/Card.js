import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styles from './Card.module.scss';

const Card = ({ cardType }) => (
  <div className={styles.wrapper}>
    <div className={`${styles.heading} ${styles[cardType]}`}>
      <Heading>This is heading</Heading>
      <div className={styles.date}>3 days</div>
      {cardType === 'twitter' && (
        <img
          className={styles.twitterAvatar}
          src="https://unavatar.io/kikobeats"
          alt="Twitter logo"
        />
      )}
      {cardType === 'article' && (
        <a className={styles.articleLink} href="https://twitter.com/" aria-label="Link to article">
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

Card.propTypes = {
  cardType: PropTypes.oneOf(['twitter', 'note', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;

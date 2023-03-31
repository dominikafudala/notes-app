/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LoadingConditional from 'components/organisms/LoadingConditional/LoadingConditional';
import CardService from 'services/CardsService';
import styles from './DetailsTemplate.module.scss';

const DetailsTemplate = () => {
  const [isLoading, setLoading] = useState(true);
  const [cardContent, setCardContent] = useState({
    title: '',
    created: '',
    content: '',
    articleUrl: '',
    twitterName: '',
  });
  const location = useLocation();
  const { pathname } = location;
  const type = pathname.substring(1, pathname.indexOf('/', 1) - 1);
  const cardId = pathname.substring(pathname.indexOf('/', 1) + 1);

  useEffect(() => {
    const getCard = async () => {
      CardService.getCardById(cardId).then((resp) => {
        if (resp !== -1) {
          setCardContent(resp);
        }
      });
    };
    getCard().then(() => setLoading(false));
  }, [cardId]);

  return (
    <LoadingConditional isLoading={isLoading}>
      <UserPageTemplate type={type}>
        <main className={styles.wrapper}>
          <div className={styles.heading}>
            <Heading big>{cardContent.title}</Heading>
            <Paragraph upper>Created - {cardContent.created.substring(0, 10)}</Paragraph>
          </div>
          <div className={styles.content}>
            <Paragraph>{cardContent.content}</Paragraph>
            {type !== 'note' && (
              <a className={styles.link} href={type === 'article' ? cardContent.articleUrl : `https://twitter.com/${cardContent.twitterName}`} target="_blank" rel="noreferrer">
                Open
                {` ${type}`}
              </a>
            )}
          </div>
          <div className={styles.buttonWrapper}>
            <Button colorTheme={type}>Close / Save</Button>
            <button className={styles.remove} type="submit">
              remove note
            </button>
          </div>
        </main>
      </UserPageTemplate>
    </LoadingConditional>
  );
};

export default DetailsTemplate;

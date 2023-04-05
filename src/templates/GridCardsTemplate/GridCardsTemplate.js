/* eslint-disable max-len */
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadCardsOfType from 'redux/reducers/cards/cards.thunk';
import Card from 'components/molecules/Card/Card';
import LoadingConditional from 'components/organisms/LoadingConditional/LoadingConditional';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import ThemeContext from 'contexts/ThemeContext';
import styles from './GridCardsTemplate.module.scss';

const GridCardsTemplate = () => {
  const type = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { isLoading, cardsOfType, errMsg } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(loadCardsOfType(type));
  }, [dispatch, type]);

  return (
    <LoadingConditional isLoading={isLoading}>
      <main className={styles.main}>
        {errMsg && <h1>{`Something went wrong ${errMsg}`}</h1>}
        <Input placeholder="search" search />
        <Heading>{`${type}s`}</Heading>
        <Paragraph>{`${cardsOfType !== null ? cardsOfType.length : 0} ${type}s`}</Paragraph>
        <div className={styles.grid}>{cardsOfType && cardsOfType.map((item) => <Card content={item} key={item.id} />)}</div>
      </main>
    </LoadingConditional>
  );
};

export default GridCardsTemplate;

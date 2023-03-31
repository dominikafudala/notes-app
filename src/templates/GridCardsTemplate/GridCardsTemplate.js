import React, { useEffect, useState, useContext } from 'react';
import Card from 'components/molecules/Card/Card';
import CardService from 'services/CardsService';
import LoadingConditional from 'components/organisms/LoadingConditional/LoadingConditional';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import ThemeContext from 'contexts/ThemeContext';
import styles from './GridCardsTemplate.module.scss';

const GridCardsTemplate = () => {
  const [isLoading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [amount, setAmount] = useState(0);
  const type = useContext(ThemeContext);

  useEffect(() => {
    const cardType = async () => {
      CardService.getCardsOfType(type).then((resp) => {
        let newContent = <h1>Something went wrong</h1>;
        if (resp !== -1) {
          newContent = [];
          resp.forEach((element) => {
            newContent.push(<Card content={element} key={element.id} />);
          });
        }
        setContent(newContent);
        setAmount(newContent.length);
      });
    };
    cardType().then(() => setLoading(false));
  }, [type]);

  return (
    <LoadingConditional isLoading={isLoading}>
      <main className={styles.main}>
        <Input placeholder="search" search />
        <Heading>{`${type}s`}</Heading>
        <Paragraph>{`${amount} ${type}s`}</Paragraph>
        <div className={styles.grid}>{content}</div>
      </main>
    </LoadingConditional>
  );
};

export default GridCardsTemplate;

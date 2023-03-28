import React, { useEffect, useState } from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';
import LoadingConditional from 'components/organisms/LoadingConditional/LoadingConditional';
import CardService from 'services/CardsService';

const NotesView = () => {
  const [isLoading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const cardType = async () => {
      CardService.getCardsOfType('note').then((resp) => {
        let newContent = <h1>Something went wrong</h1>;
        if (resp !== -1) {
          newContent = [];
          resp.forEach((element) => {
            newContent.push(<Card content={element} key={element.id} />);
          });
        }
        setContent(newContent);
      });
    };
    cardType();
    setLoading(false);
  }, []);

  return (
    <LoadingConditional isLoading={isLoading}>
      <UserPageTemplate type="note" heading="notes">
        {content}
      </UserPageTemplate>
    </LoadingConditional>
  );
};

export default NotesView;

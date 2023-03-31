import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import GridCardsTemplate from 'templates/GridCardsTemplate/GridCardsTemplate';

const ArticlesView = () => (
  <UserPageTemplate type="article">
    <GridCardsTemplate />
  </UserPageTemplate>
);

export default ArticlesView;

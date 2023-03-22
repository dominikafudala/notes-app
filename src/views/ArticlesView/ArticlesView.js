import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const ArticlesView = () => (
  <UserPageTemplate type="article" heading="articles">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </UserPageTemplate>
);

export default ArticlesView;

import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const TwittersView = () => (
  <UserPageTemplate type="twitter" heading="twitters">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </UserPageTemplate>
);

export default TwittersView;

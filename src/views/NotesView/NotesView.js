import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const NotesView = () => (
  <UserPageTemplate type="note" heading="notes">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </UserPageTemplate>
);

export default NotesView;

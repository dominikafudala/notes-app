import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import GridCardsTemplate from 'templates/GridCardsTemplate/GridCardsTemplate';

const NotesView = () => (
  <UserPageTemplate type="note">
    <GridCardsTemplate />
  </UserPageTemplate>
);

export default NotesView;

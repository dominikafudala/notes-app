import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'styles/base/_reset.scss';
import routes from 'routes/routes';

import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import TwittersView from 'views/TwittersView/TwittersView';

import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to={routes.notes} />} />
      <Route exact path={routes.notes} element={<NotesView />} />
      <Route path={routes.noteId} element={<DetailsTemplate />} />
      <Route exact path={routes.articles} element={<ArticlesView />} />
      <Route path={routes.articleId} element={<DetailsTemplate />} />
      <Route exact path={routes.twitters} element={<TwittersView />} />
      <Route path={routes.twitterId} element={<DetailsTemplate />} />
    </Routes>
  </BrowserRouter>
);

export default Root;

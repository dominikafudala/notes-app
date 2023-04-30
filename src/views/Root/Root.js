import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'styles/base/_reset.scss';
import routes from 'routes/routes';

import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import TwittersView from 'views/TwittersView/TwittersView';
import LoginView from 'views/LoginView/LoginView';
import SignupView from 'views/SignupView/SignupView';

import PrivateRoute from 'helpers/PrivateRoute';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to={routes.notes} />} />
      <Route exact path={`/${routes.notes}`} element={<PrivateRoute />}>
        <Route exact path={routes.notes} element={<NotesView />} />
      </Route>
      <Route path={`/${routes.noteId}`} element={<PrivateRoute />}>
        <Route path={routes.noteId} element={<DetailsTemplate />} />
      </Route>
      <Route exact path={`/${routes.articles}`} element={<PrivateRoute />}>
        <Route exact path={routes.articles} element={<ArticlesView />} />
      </Route>
      <Route path={`/${routes.articleId}`} element={<PrivateRoute />}>
        <Route path={routes.articleId} element={<DetailsTemplate />} />
      </Route>
      <Route exact path={`/${routes.twitters}`} element={<PrivateRoute />}>
        <Route exact path={routes.twitters} element={<TwittersView />} />
      </Route>
      <Route path={`/${routes.twitterId}`} element={<PrivateRoute />}>
        <Route path={routes.twitterId} element={<DetailsTemplate />} />
      </Route>
      <Route path={routes.login} element={<LoginView />} />
      <Route path={routes.signup} element={<SignupView />} />
    </Routes>
  </BrowserRouter>
);

export default Root;

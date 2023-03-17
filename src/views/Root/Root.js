import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/base/_reset.scss';

import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import TwittersView from 'views/TwittersView/TwittersView';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotesView />} />
      <Route path="/articles" element={<ArticlesView />} />
      <Route path="/twitters" element={<TwittersView />} />
    </Routes>
  </BrowserRouter>
);

export default Root;

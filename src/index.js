import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configStore from 'redux/store/store';
import Root from 'views/Root/Root';
import reportWebVitals from './reportWebVitals';

const store = configStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

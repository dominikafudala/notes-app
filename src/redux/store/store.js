/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RootReducer from 'redux/reducers/rootReducer';

const configStore = () => {
  const middleware = [thunk];
  const store = configureStore({ reducer: RootReducer, middleware, devTools: true });
  return store;
};

export default configStore;

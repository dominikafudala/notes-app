import { combineReducers } from 'redux';
import CardsReducer from './cards/cards.reducer';

const RootReducer = combineReducers({ cards: CardsReducer });

export default RootReducer;

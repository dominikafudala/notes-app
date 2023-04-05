/* eslint-disable default-param-last */
import cardsActionTypes from 'redux/actions/cards/cards.actionTypes';
import cardsInitialState from './cards.initialState';

const CardsReducer = (state = cardsInitialState, { type, payload }) => {
  switch (type) {
    case cardsActionTypes.CARDS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        cardsOfType: null,
        errorMsg: null,
      };
    case cardsActionTypes.CARDS_LOAD_ALL_BY_TYPE:
      return {
        ...state,
        isLoading: false,
        cardsOfType: payload,
      };
    case cardsActionTypes.CARDS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
};

export default CardsReducer;

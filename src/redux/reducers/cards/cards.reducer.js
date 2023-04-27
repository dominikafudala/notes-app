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
        errMsg: null,
      };
    case cardsActionTypes.CARDS_LOAD_ALL_BY_TYPE:
      return {
        ...state,
        isLoading: false,
        cardsOfType: payload,
      };
    case cardsActionTypes.CARDS_ERROR:
      return {
        ...state,
        isLoading: false,
        errMsg: payload,
      };
    case cardsActionTypes.CARD_DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case cardsActionTypes.CARD_DELETE:
      return {
        ...state,
        isLoading: false,
        cardsOfType: state.cardsOfType.filter((card) => card.id !== payload),
      };
    case cardsActionTypes.CARD_ADD_NEW_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case cardsActionTypes.CARD_ADD_NEW_ITEM:
      return {
        ...state,
        isLoading: false,
        cardsOfType: [...state.cardsOfType, payload],
      };
    default:
      return state;
  }
};

export default CardsReducer;

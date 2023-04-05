import cardsActionTypes from './cards.actionTypes';

const cardsLoadStart = () => ({
  type: cardsActionTypes.CARDS_LOAD_START,
});

const cardsLoadAllByType = (cardsOfType) => ({
  type: cardsActionTypes.CARDS_LOAD_ALL_BY_TYPE,
  payload: cardsOfType,
});

const cardsLoadError = (errorMsg) => ({
  type: cardsActionTypes.CARDS_LOAD_ERROR,
  payload: errorMsg,
});

export default {
  cardsLoadStart,
  cardsLoadAllByType,
  cardsLoadError,
};

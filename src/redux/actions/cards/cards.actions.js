import cardsActionTypes from './cards.actionTypes';

const cardsLoadStart = () => ({
  type: cardsActionTypes.CARDS_LOAD_START,
});

const cardsLoadAllByType = (cardsOfType) => ({
  type: cardsActionTypes.CARDS_LOAD_ALL_BY_TYPE,
  payload: cardsOfType,
});

const cardsError = (errorMsg) => ({
  type: cardsActionTypes.CARDS_ERROR,
  payload: errorMsg,
});

const cardDeleteStart = () => ({
  type: cardsActionTypes.CARD_DELETE_START,
});

const cardDeleteFromId = (id) => ({
  type: cardsActionTypes.CARD_DELETE,
  payload: id,
});

const cardAddNewItemStart = () => ({
  type: cardsActionTypes.CARD_ADD_NEW_ITEM_START,
});

const cardAddNewItem = (newItem) => ({
  type: cardsActionTypes.CARD_ADD_NEW_ITEM,
  payload: newItem,
});

export default {
  cardsLoadStart,
  cardsLoadAllByType,
  cardsError,
  cardDeleteStart,
  cardDeleteFromId,
  cardAddNewItemStart,
  cardAddNewItem,
};

import CardService from 'services/CardsService';
import cardsActions from 'redux/actions/cards/cards.actions';

export const loadCardsOfType = (type) => (dispatch) => {
  dispatch(cardsActions.cardsLoadStart());

  CardService.getCardsOfType(type)
    .then((resp) => dispatch(cardsActions.cardsLoadAllByType(resp)))
    .catch((errMsg) => dispatch(cardsActions.cardsError(errMsg)));
};

export const deleteCardFromId = (id) => (dispatch) => {
  dispatch(cardsActions.cardDeleteStart());

  CardService.deleteCardFromId(id)
    .then(() => dispatch(cardsActions.cardDeleteFromId(id)))
    .catch((errMsg) => dispatch(cardsActions.cardsError(errMsg)));
};

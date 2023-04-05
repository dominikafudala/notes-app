import CardService from 'services/CardsService';
import cardsActions from 'redux/actions/cards/cards.actions';

const loadCardsOfType = (type) => (dispatch) => {
  dispatch(cardsActions.cardsLoadStart());

  CardService.getCardsOfType(type)
    .then((resp) => dispatch(cardsActions.cardsLoadAllByType(resp)))
    .catch((errMsg) => dispatch(cardsActions.cardsLoadError(errMsg)));
};

export default loadCardsOfType;

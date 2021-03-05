import {ActionType} from '../action';
import {Cities, SortingTypes} from '../../const';
import {adaptOffersData, adaptOfferData} from '../../services/adapter';

const initialState = {
  offers: [],
  activeCity: Cities.PARIS,
  activeSorting: SortingTypes.POPULAR,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersData(action.payload),
        isDataLoaded: true
      };
    case ActionType.ADD_FAVORITE:
    case ActionType.REMOVE_FAVORITE:
      return {
        ...state,
        offers: state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            return {...offer, isFavorite: action.payload[`is_favorite`]};
          } else {
            return offer;
          }
        }),
      };
    default:
      return state;
  }
};

export {reducer};

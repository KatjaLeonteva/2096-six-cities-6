import {ActionType} from './action';
import {Cities, SortingTypes, AuthorizationStatus} from '../const';
import {adaptOffersData} from '../services/adapter';

const initialState = {
  offers: [],
  activeCity: Cities.PARIS,
  activeSorting: SortingTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
  isOffersDataLoaded: false
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersData(action.payload),
        isOffersDataLoaded: true
      };
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    case ActionType.CLEAR_AUTH_INFO:
      return {
        ...state,
        authInfo: {}
      };
    default:
      return state;
  }
};

export {reducer};

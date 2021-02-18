import {ActionType} from './action';
import {Cities} from '../const';
import {getCityOffers, getFavoriteOffers} from '../core';
import offers from '../mocks/offers';

const initialState = {
  activeCity: Cities.PARIS,
  offers,
  cityOffers: getCityOffers(Cities.PARIS),
  favoriteOffers: getFavoriteOffers()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.SET_CITY_OFFERS:
      return {
        ...state,
        cityOffers: getCityOffers(state.activeCity)
      };
  }

  return state;
};

export {reducer};

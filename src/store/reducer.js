import {ActionType} from './action';
import {Cities, SortingTypes} from '../const';
import offers from '../mocks/offers';

const initialState = {
  offers,
  activeCity: Cities.PARIS,
  activeSorting: SortingTypes.POPULAR
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
    default:
      return state;
  }
};

export {reducer};

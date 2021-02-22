import {ActionType} from './action';
import {Cities} from '../const';
import offers from '../mocks/offers';

const initialState = {
  offers,
  activeCity: Cities.PARIS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

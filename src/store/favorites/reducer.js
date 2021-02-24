import {ActionType} from './action';
import {adaptOffersData} from '../../services/adapter';

const initialState = {
  offers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        activeCity: adaptOffersData(action.payload)
      };
    default:
      return state;
  }
};

export {reducer};

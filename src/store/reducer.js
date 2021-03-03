import {combineReducers} from 'redux';
import {reducer as mainReducer} from './main/reducer';
import {reducer as userReducer} from './user/reducer';
import {reducer as offerReducer} from './offer/reducer';

export const NameSpace = {
  USER: `USER`,
  MAIN: `MAIN`,
  OFFER: `OFFER`
};

const reducers = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.MAIN]: mainReducer,
  [NameSpace.OFFER]: offerReducer
});

export {reducers};

import {combineReducers} from 'redux';
import {reducer as mainReducer} from './main/reducer';
import {reducer as userReducer} from './user/reducer';
import {reducer as offerReducer} from './offer/reducer';

const reducers = combineReducers({
  user: userReducer,
  main: mainReducer,
  offer: offerReducer
});

export {reducers};

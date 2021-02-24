import {combineReducers} from 'redux';
import {reducer as mainReducer} from './main/reducer';
import {reducer as userReducer} from './user/reducer';

const reducers = combineReducers({
  user: userReducer,
  main: mainReducer,
});

export {reducers};

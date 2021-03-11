import {reducer} from './reducer';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}});
  });

  it(`Reducer should update authorization status to AUTH`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}};

    const authAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(reducer(state, authAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, authInfo: {}});
  });

  it(`Reducer should update authorization status to NO_AUTH`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, authInfo: {}};

    const noAuthAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(reducer(state, noAuthAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}});
  });

  it(`Reducer should update authorization info`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, authInfo: {}};

    const setAuthAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: {
        "avatar_url": `img/1.png`,
        "email": `Oliver.conner@gmail.com`,
        "id": 1,
        "is_pro": false,
        "name": `Oliver.conner`
      },
    };

    expect(reducer(state, setAuthAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH, authInfo: {
          "avatar_url": `img/1.png`,
          "email": `Oliver.conner@gmail.com`,
          "id": 1,
          "is_pro": false,
          "name": `Oliver.conner`
        }
      });
  });

});

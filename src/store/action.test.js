import {ActionType, ActionCreator} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator requireAuthorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`,
    };

    expect(ActionCreator.requireAuthorization(`NO_AUTH`)).toEqual(expectedAction);
  });
});

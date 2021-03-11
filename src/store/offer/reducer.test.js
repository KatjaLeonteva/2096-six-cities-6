import {reducer} from './reducer';
import {ActionType} from '../action';
import {offerRaw, offerAdapted} from './test-mocks';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({
        offer: null,
        reviews: [],
        nearby: [],
        offerNotFound: false
      });
  });

  it(`Reducer reset to initial state`, () => {
    const state = {
      offer: {id: 1},
      reviews: [{id: 100}],
      nearby: [{id: 2}, {id: 3}],
      offerNotFound: false
    };

    const resetAction = {
      type: ActionType.RESET_OFFER_STATE
    };

    expect(reducer(state, resetAction))
      .toEqual({
        offer: null,
        reviews: [],
        nearby: [],
        offerNotFound: false
      });
  });

  it(`Reducer should mark offer as favorite`, () => {
    const state = {
      offer: {...offerAdapted, isFavorite: false},
      reviews: [],
      nearby: [{id: 2}, {id: 3}],
      offerNotFound: false
    };

    const addFavoriteAction = {
      type: ActionType.ADD_FAVORITE,
      payload: {...offerRaw, "is_favorite": true},
    };

    expect(reducer(state, addFavoriteAction))
      .toEqual({
        offer: {...offerAdapted, isFavorite: true},
        reviews: [],
        nearby: [{id: 2}, {id: 3}],
        offerNotFound: false
      });
  });

  it(`Reducer should unmark offer as favorite`, () => {
    const state = {
      offer: {...offerAdapted, isFavorite: true},
      reviews: [],
      nearby: [{id: 2}, {id: 3}],
      offerNotFound: false
    };

    const removeFavoriteAction = {
      type: ActionType.REMOVE_FAVORITE,
      payload: {...offerRaw, "is_favorite": false},
    };

    expect(reducer(state, removeFavoriteAction))
      .toEqual({
        offer: {...offerAdapted, isFavorite: false},
        reviews: [],
        nearby: [{id: 2}, {id: 3}],
        offerNotFound: false
      });
  });

  it(`Reducer should unmark offer when all favorites reset`, () => {
    const state = {
      offer: {...offerAdapted, isFavorite: true},
      reviews: [],
      nearby: [{id: 2}, {id: 3}],
      offerNotFound: false
    };

    const resetFavoritesAction = {
      type: ActionType.RESET_FAVORITES
    };

    expect(reducer(state, resetFavoritesAction))
      .toEqual({
        offer: {...offerAdapted, isFavorite: false},
        reviews: [],
        nearby: [{id: 2}, {id: 3}],
        offerNotFound: false
      });
  });

  it(`Reducer should not update null offer when all favorites reset`, () => {
    const state = {
      offer: null,
      reviews: [],
      nearby: [],
      offerNotFound: false
    };

    const resetFavoritesAction = {
      type: ActionType.RESET_FAVORITES
    };

    expect(reducer(state, resetFavoritesAction))
      .toEqual({
        offer: null,
        reviews: [],
        nearby: [],
        offerNotFound: false
      });
  });
});

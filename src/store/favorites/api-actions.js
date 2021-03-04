import {ActionCreator} from './action';
import {ActionCreator as MainActionCreator} from '../main/action';
import {APIRoutes} from '../../const';

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)))
);

export const changeStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(ActionCreator[data[`is_favorite`] ? `addFavorite` : `removeFavorite`](data));
      dispatch(MainActionCreator.updateOffer(data));
    })
);

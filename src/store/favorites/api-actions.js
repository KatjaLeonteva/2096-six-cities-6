import {ActionCreator} from './action';
import {APIRoutes} from '../../const';

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)))
);

export const updateStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      console.log(data);
      return data;
    })
);

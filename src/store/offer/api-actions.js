import {ActionCreator} from './action';

export const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferById(data)))
    .catch(() => dispatch(ActionCreator.offerNotFound()))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
    .catch(() => {})
);

export const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearby(data)))
    .catch(() => {})
);

export const sendReview = ({id, review}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, review)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

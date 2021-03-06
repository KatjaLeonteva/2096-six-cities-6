import {ActionType} from '../action';
import {adaptOfferData, adaptOffersData, adaptReviewsData} from '../../services/adapter';

const initialState = {
  offer: null,
  reviews: [],
  nearby: [],
  offerNotFound: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: adaptOfferData(action.payload),
        offerNotFound: false
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: adaptReviewsData(action.payload)
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: adaptOffersData(action.payload)
      };
    case ActionType.OFFER_NOT_FOUND:
      return {
        ...state,
        offerNotFound: true
      };
    case ActionType.CLEAN_STATE:
      return {
        ...state,
        offer: null,
        reviews: [],
        nearby: [],
        offerNotFound: false
      };
    default:
      return state;
  }
};

export {reducer};

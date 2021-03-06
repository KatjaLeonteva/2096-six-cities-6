import {NameSpace} from '../root-reducer';

export const getCurrentOffer = (state) => state[NameSpace.OFFER].offer;

export const getReviews = (state) => state[NameSpace.OFFER].reviews;

export const getNearbyOffers = (state) => {
  return state[NameSpace.MAIN].offers.filter((item) => state[NameSpace.OFFER].nearby.includes(item.id));
};

export const getNotFoundStatus = (state) => state[NameSpace.OFFER].offerNotFound;

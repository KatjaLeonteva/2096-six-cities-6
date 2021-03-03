import {NameSpace} from '../reducer';

export const getCurrentOffer = (state) => state[NameSpace.OFFER].offer;
export const getReviews = (state) => state[NameSpace.OFFER].reviews;
export const getNearbyOffers = (state) => state[NameSpace.OFFER].nearby;
export const getNotFoundStatus = (state) => state[NameSpace.OFFER].offerNotFound;

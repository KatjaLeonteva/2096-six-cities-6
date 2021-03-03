import {NameSpace} from '../reducer';

export const getFavoriteOffers = (state) => state[NameSpace.FAVORITES].offers;

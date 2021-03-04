import {NameSpace} from '../root-reducer';

export const getFavoriteOffers = (state) => state[NameSpace.FAVORITES].offers;

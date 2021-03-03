import {createSelector} from 'reselect';
import {SortingTypes} from '../../const';
import {NameSpace} from '../reducer';

export const getOffers = (state) => state[NameSpace.MAIN].offers;
export const getActiveCity = (state) => state[NameSpace.MAIN].activeCity;
export const getActiveSorting = (state) => state[NameSpace.MAIN].activeSorting;
export const getDataLoadedStatus = (state) => state[NameSpace.MAIN].isDataLoaded;

export const getSortedCityOffers = createSelector(
    [getOffers, getActiveCity, getActiveSorting],
    (offers, city, sorting) => {
      const cityOffers = offers.filter((offer) => offer.city.name === city);

      switch (sorting) {
        case SortingTypes.PRICE_ASC:
          return [...cityOffers].sort((a, b) => (a.price - b.price));
        case SortingTypes.PRICE_DESC:
          return [...cityOffers].sort((a, b) => (b.price - a.price));
        case SortingTypes.RATING:
          return [...cityOffers].sort((a, b) => (b.rating - a.rating));
        default:
          return [...cityOffers];
      }
    }
);

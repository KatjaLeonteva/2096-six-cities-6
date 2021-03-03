import {createSelector} from 'reselect';
import {SortingTypes} from '../../const';

const getOffers = (state) => state.offers;
const getActiveCity = (state) => state.activeCity;
const getActiveSorting = (state) => state.activeSorting;

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

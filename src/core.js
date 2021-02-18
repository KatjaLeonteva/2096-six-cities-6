import offers from './mocks/offers';

export const getCityOffers = (city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getFavoriteOffers = () => {
  return offers.filter((offer) => offer.isFavorite);
};

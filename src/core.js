export const getFavoriteOffers = (offers) => {
  return offers.filter((offer) => offer.isFavorite);
};

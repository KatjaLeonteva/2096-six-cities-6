export const ActionType = {
  LOAD_FAVORITES: `favorites/loadOffers`,
  ADD_FAVORITE: `favorites/addOffer`,
  REMOVE_FAVORITE: `favorites/removeOffer`
};

export const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers,
  }),
  addFavorite: (offer) => ({
    type: ActionType.ADD_FAVORITE,
    payload: offer
  }),
  removeFavorite: (offer) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload: offer
  })
};

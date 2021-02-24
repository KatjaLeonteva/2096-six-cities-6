export const ActionType = {
  LOAD_FAVORITES: `favorites/loadOffers`
};

export const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers,
  })
};

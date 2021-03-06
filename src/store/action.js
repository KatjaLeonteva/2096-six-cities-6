export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTH_INFO: `user/login`,
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING: `main/changeSorting`,
  LOAD_OFFERS: `main/loadOffers`,
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_REVIEWS: `offer/loadReviews`,
  LOAD_NEARBY: `offer/loadNearby`,
  OFFER_NOT_FOUND: `offer/notFound`,
  CLEAN_STATE: `offer/cleanState`,
  CHANGE_STATUS: `offer/changeStatus`,
  LOAD_FAVORITES: `favorites/loadOffers`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: info
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadOfferById: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadNearby: (offers) => ({
    type: ActionType.LOAD_NEARBY,
    payload: offers
  }),
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers,
  }),
  offerNotFound: () => ({
    type: ActionType.OFFER_NOT_FOUND
  }),
  cleanOfferState: () => ({
    type: ActionType.CLEAN_STATE
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting
  }),
  changeOfferStatus: (offer) => ({
    type: ActionType.CHANGE_STATUS,
    payload: offer
  })
};

export const ActionType = {
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_REVIEWS: `offer/loadReviews`,
  LOAD_NEARBY: `offer/loadNearby`,
  OFFER_NOT_FOUND: `offer/notFound`,
  CLEAN_STATE: `offer/cleanState`
};

export const ActionCreator = {
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
  offerNotFound: () => ({
    type: ActionType.OFFER_NOT_FOUND
  }),
  cleanState: () => ({
    type: ActionType.CLEAN_STATE
  })
};

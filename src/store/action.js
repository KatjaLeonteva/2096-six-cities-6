export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  SET_CITY_OFFERS: `common/filterOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setCityOffers: () => ({
    type: ActionType.SET_CITY_OFFERS
  })
};

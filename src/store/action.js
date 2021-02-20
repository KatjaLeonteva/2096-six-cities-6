export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  CHANGE_SORTING: `common/changeSorting`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting
  })
};

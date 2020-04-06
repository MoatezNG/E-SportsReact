import { matchConstants } from "../_constants";

export const matchs = (state = [], action) => {
  switch (action.type) {
    case matchConstants.FINDMATCHS_REQUEST:
      return [];
    case matchConstants.FINDMATCHS_SUCCESS:
      return action.matchs;
    case matchConstants.FINDMATCHS_FAILURE:
      return [];
    default:
      return state;
  }
};

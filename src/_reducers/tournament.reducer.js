import { tourConstants } from "../_constants";

export const tournaments = (state = [], action) => {
  switch (action.type) {
    case tourConstants.TOUR_SUCCESS:
      return action.tournaments;
    default:
      return state;
  }
};

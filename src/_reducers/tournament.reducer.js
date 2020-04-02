import { tourConstants } from "../_constants";
import { oneTourConstants } from "../_constants";
export const tournaments = (state = [], action) => {
  switch (action.type) {
    case tourConstants.TOUR_SUCCESS:
      return action.tournaments;

    default:
      return state;
  }
};
export const tournament = (state = {}, action) => {
  switch (action.type) {
    case oneTourConstants.ONE_TOUR_SUCCESS:
      return action.tournament;
    default:
      return state;
  }
};

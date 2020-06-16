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
export const mytournaments = (state = [], action) => {
  switch (action.type) {
    case tourConstants.GETMY_TOURNAMENT_REQUEST:
      return [];
    case tourConstants.GETMY_TOURNAMENT_SUCCESS:
      return action.mytournaments;
    case tourConstants.GETMY_TOURNAMENT_FAILURE:
      return {};
    default:
      return state;
  }
};
export const addTournament = (state = {}, action) => {
  switch (action.type) {
    case tourConstants.ADD_TOURNAMENT_REQUEST:
      return {};
    case tourConstants.ADD_TOURNAMENT_SUCCESS:
      return action.tournament;
    case tourConstants.ADD_TOURNAMENT_FAILURE:
      return {};
    default:
      return state;
  }
};
export const participateTournament = (state = {}, action) => {
  switch (action.type) {
    case tourConstants.PARTICIPATE_TOURNAMENT_REQUEST:
      return {};
    case tourConstants.PARTICIPATE_TOURNAMENT_SUCCESS:
      return {};
    case tourConstants.PARTICIPATE_TOURNAMENT_FAILURE:
      return {};
    default:
      return state;
  }
};

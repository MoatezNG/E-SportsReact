import { tournamentService } from "../_services";
import { tourConstants } from "../_constants";
import { alertActions } from "./";

export const tournamentActions = {
  getTournaments
};

function getTournaments() {
  return dispatch => {
    tournamentService.getTournament().then(tournaments => {
      dispatch(success(tournaments));
    });
  };
}

function success(tournaments) {
  return { type: tourConstants.TOUR_SUCCESS, tournaments };
}

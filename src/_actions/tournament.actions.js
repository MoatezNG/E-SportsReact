import { tournamentService } from "../_services";
import { tourConstants } from "../_constants";
import { oneTourConstants } from "../_constants";
export const tournamentActions = {
  getTournaments,
  getTournament
};

function getTournaments() {
  return dispatch => {
    tournamentService.getTournaments().then(tournaments => {
      dispatch(success(tournaments));
    });
  };
}
function getTournament(id) {
  return dispatch => {
    tournamentService.getTournament(id).then(tournament => {
      dispatch(successO(tournament));
    });
  };
}
function successO(tournament) {
  return { type: oneTourConstants.ONE_TOUR_SUCCESS, tournament };
}
function success(tournaments) {
  return { type: tourConstants.TOUR_SUCCESS, tournaments };
}

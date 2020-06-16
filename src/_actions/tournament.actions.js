import { tournamentService } from "../_services";
import { tourConstants } from "../_constants";
import { oneTourConstants } from "../_constants";
import { alertActions } from "./";
import { history } from "../_helpers";
export const tournamentActions = {
  getTournaments,
  getTournament,
  addTournament,
  participateToTournament,
  MyTournaments,
};
function addTournament(tournament, data) {
  return (dispatch) => {
    dispatch(request());
    tournamentService.addTournament(tournament, data).then(
      (tournament) => {
        dispatch(success(tournament));
        history.push("/Mytournaments");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(tournament) {
    return { type: tourConstants.ADD_TOURNAMENT_REQUEST, tournament };
  }
  function success(tournament) {
    return { type: tourConstants.ADD_TOURNAMENT_SUCCESS, tournament };
  }
  function failure(error) {
    return { type: tourConstants.ADD_TOURNAMENT_FAILURE, error };
  }
}

function participateToTournament(idTeam, idTournament) {
  return (dispatch) => {
    dispatch(request());
    tournamentService.participate(idTeam, idTournament).then(
      () => {
        dispatch(success());
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: tourConstants.PARTICIPATE_TOURNAMENT_REQUEST };
  }
  function success() {
    return { type: tourConstants.PARTICIPATE_TOURNAMENT_SUCCESS };
  }
  function failure(error) {
    return { type: tourConstants.PARTICIPATE_TOURNAMENT_FAILURE, error };
  }
}

function getTournaments() {
  return (dispatch) => {
    tournamentService.getTournaments().then((tournaments) => {
      dispatch(success(tournaments));
    });
  };
}
function getTournament(id) {
  return (dispatch) => {
    tournamentService.getTournament(id).then((tournament) => {
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
function MyTournaments() {
  return (dispatch) => {
    dispatch(request());
    tournamentService.getMyTournaments().then(
      (mytournaments) => {
        console.log(mytournaments);
        dispatch(success(mytournaments));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: tourConstants.GETMY_TOURNAMENT_REQUEST };
  }
  function success(mytournaments) {
    return { type: tourConstants.GETMY_TOURNAMENT_SUCCESS, mytournaments };
  }
  function failure(error) {
    return { type: tourConstants.GETMY_TOURNAMENT_FAILURE, error };
  }
}

import { matchService } from "../_services";
import { matchConstants } from "../_constants";
import { alertActions } from "./";

export const matchActions = {
  getMatchbyteam
};

function getMatchbyteam(teamId) {
  return dispatch => {
    dispatch(request());
    matchService.getMatchbyTeam(teamId).then(
      matchs => {
        dispatch(success(matchs));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function request() {
  return { type: matchConstants.FINDMATCHS_REQUEST };
}
function success(matchs) {
  return { type: matchConstants.FINDMATCHS_SUCCESS, matchs };
}
function failure(error) {
  return { type: matchConstants.FINDMATCHS_FAILURE, error };
}

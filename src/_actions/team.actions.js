import { teamService } from "../_services";
import { teamConstants } from "../_constants";
import { alertActions } from "./";

export const teamActions = {
  getTeamLeader
};

function getTeamLeader(userId) {
  return dispatch => {
    dispatch(request());
    teamService.getTeamByTeamLeader(userId).then(
      findTeam => {
        dispatch(success(findTeam));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function request() {
  return { type: teamConstants.FINDTEAM_REQUEST };
}
function success(findTeam) {
  return { type: teamConstants.FINDTEAM_SUCCESS, findTeam };
}
function failure(error) {
  return { type: teamConstants.FINDTEAM_FAILURE, error };
}

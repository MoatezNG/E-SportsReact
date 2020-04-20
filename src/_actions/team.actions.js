import { teamService } from "../_services";
import { teamConstants } from "../_constants";
import { alertActions } from "./";

export const teamActions = {
  getTeamLeader,
  getAllteams
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
function getAllteams() {
  return dispatch => {
    teamService.getAllteams().then(teams => {
      dispatch(successteams(teams));
    });
  };
}
function successteams(teams) {
  return { type: teamConstants.TEAMS_SUCCESS, teams };
}


function addteam(team) {
  return dispatch => {
    teamService.addteam().then(teams => {
      dispatch(successteams(teams));
    });
  };
}
function request() {
  return { type: teamConstants.FINDTEAM_REQUEST };
}
function success(teams) {
  return { type: teamConstants.FINDTEAM_SUCCESS, teams };
}
function failure(error) {
  return { type: teamConstants.FINDTEAM_FAILURE, error };
}
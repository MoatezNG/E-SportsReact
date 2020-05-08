import { teamService } from "../_services";
import { teamConstants } from "../_constants";
import { alertActions } from "./";

export const teamActions = {
  getTeamLeader,
  getAllteams,
  addteam,
  getMyTeam,
  deleteTeam
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
  function request() {
    return { type: teamConstants.CREATE_TEAM_REQUEST };
  }
  function success(team) {
    return { type: teamConstants.CREATE_TEAM_SUCCESS, team};
  }
  function failure(error) {
    return { type: teamConstants.CREATE_TEAM_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())
    teamService
    .addteam(team)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(error => {
      dispatch(failure(error));
    })
  };
}
function getMyTeam() {

  function request() {
    return { type: teamConstants.GET_MY_TEAM_REQUEST};
  }
  function success(team) {
    return { type: teamConstants.GET_MY_TEAM_SUCCESS, team };
  }
  function failure(error) {
    return { type: teamConstants.GET_MY_TEAM_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())
    teamService.getMyTeam().then(team => {
      dispatch(success(team.data));
    })
    .catch(error => {
      dispatch(failure(error));
    })
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
function deleteTeam(team) {
  function request() {
    return { type: teamConstants.DELETE_MY_TEAM_REQUEST};
  }
  function success(team) {
    return { type: teamConstants.DELETE_MY_TEAM_SUCCESS, team};
  }
  function failure(error) {
    return { type: teamConstants.DELETE_MY_TEAM_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())
    teamService
    .deleteMyTeam(team)
    .then(response => {
      dispatch(success(response));
    })
    .catch(error => {
      dispatch(failure(error));
    })
  };
}

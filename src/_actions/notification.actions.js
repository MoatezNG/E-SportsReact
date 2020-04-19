import { notificationService } from "../_services";
import { notifConstants, challengeConstants } from "../_constants";
import { alertActions } from "./";

export const notificationActions = {
  getNotification,
  challengeTeam,
  acceptChallenge,
};

function getNotification(userId) {
  return (dispatch) => {
    dispatch(request());
    notificationService.getNotification(userId).then(
      (notification) => {
        dispatch(success(notification));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function request() {
  return { type: notifConstants.NOTIF_REQUEST };
}
function success(notification) {
  return { type: notifConstants.NOTIF_SUCCESS, notification };
}
function failure(error) {
  return { type: notifConstants.NOTIF_FAILURE, error };
}

function challengeTeam(invitingL, recevingL, DateGame) {
  return (dispatch) => {
    dispatch(request());
    notificationService.challengeTeam(invitingL, recevingL, DateGame).then(
      (notificationRequest) => {
        dispatch(success(notificationRequest));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: challengeConstants.CHALLENGE_REQUEST };
  }
  function success(notificationRequest) {
    return { type: challengeConstants.CHALLENGE_SUCCESS, notificationRequest };
  }

  function failure(error) {
    return { type: challengeConstants.CHALLENGE_FAILURE, error };
  }
}
function acceptChallenge(notifId, invitingL, recevingL) {
  return (dispatch) => {
    dispatch(request());
    notificationService.acceptChallenge(notifId, invitingL, recevingL).then(
      (notificationRequest) => {
        dispatch(success(notificationRequest));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: challengeConstants.CHALLENGE_REQUEST };
  }
  function success(notificationRequest) {
    return { type: challengeConstants.CHALLENGE_SUCCESS, notificationRequest };
  }

  function failure(error) {
    return { type: challengeConstants.CHALLENGE_FAILURE, error };
  }
}

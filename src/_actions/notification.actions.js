import { notificationService } from "../_services";
import {
  notifConstants,
  challengeConstants,
  acceptednotifConstants,
  unreadednotifConstants,
} from "../_constants";
import { alertActions } from "./";

export const notificationActions = {
  getNotification,
  challengeTeam,
  acceptChallenge,
  getAcceptedInvites,
  getUnreadednotif,
  readNotification,
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
function acceptinvitation(notificationId) {
  return { type: "ACCEPT_NOTIFICATION", notificationId };
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
  return async (dispatch) => {
    await notificationService.acceptChallenge(notifId, invitingL, recevingL);
    dispatch(acceptinvitation(notifId));
  };
}

function getAcceptedInvites(userId) {
  return (dispatch) => {
    dispatch(request());
    notificationService.getAcceptedNotif(userId).then(
      (acceptednotification) => {
        dispatch(success(acceptednotification));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: acceptednotifConstants.NOTIFACC_REQUEST };
  }
  function success(acceptednotification) {
    return {
      type: acceptednotifConstants.NOTIFACC_SUCCESS,
      acceptednotification,
    };
  }
  function failure(error) {
    return { type: acceptednotifConstants.NOTIFACC_FAILURE, error };
  }
}
function getUnreadednotif(userId) {
  return (dispatch) => {
    dispatch(request());
    notificationService.getUndreadedNotif(userId).then(
      (unread) => {
        dispatch(success(unread));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: unreadednotifConstants.UN_REQUEST };
  }
  function success(unread) {
    return { type: unreadednotifConstants.UN_SUCCESS, unread };
  }
  function failure(error) {
    return { type: unreadednotifConstants.UN_FAILURE, error };
  }
}

function readNotification(userId) {
  return (dispatch) => {
    dispatch(request());
    notificationService.readNotification(userId);
    const timer = setTimeout(() => {
      notificationService.getUndreadedNotif(userId).then(
        (unread) => {
          dispatch(success(unread));
        },
        (error) => {
          dispatch(failure(error));
        }
      );
    }, 200);
    return () => clearTimeout(timer);
  };

  function request() {
    return { type: unreadednotifConstants.UN_REQUEST };
  }
  function success(unread) {
    return { type: unreadednotifConstants.UN_SUCCESS, unread };
  }
  function failure(error) {
    return { type: unreadednotifConstants.UN_FAILURE, error };
  }
}

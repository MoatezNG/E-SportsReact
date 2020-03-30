import { notificationService } from "../_services";
import { notifConstants } from "../_constants";
import { alertActions } from "./";

export const notificationActions = {
  getNotification
};

function getNotification(userId) {
  return dispatch => {
    dispatch(request());
    notificationService.getNotification(userId).then(
      notification => {
        dispatch(success(notification));
      },
      error => {
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

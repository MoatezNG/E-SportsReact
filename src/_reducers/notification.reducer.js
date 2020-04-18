import { notifConstants, challengeConstants } from "../_constants";

export const notification = (state = [], action) => {
  switch (action.type) {
    case notifConstants.NOTIF_REQUEST:
      return [];
    case notifConstants.NOTIF_SUCCESS:
      return action.notification;
    case notifConstants.NOTIF_FAILURE:
      return [];
    default:
      return state;
  }
};

export const notificationRequest = (state = {}, action) => {
  switch (action.type) {
    case challengeConstants.CHALLENGE_REQUEST:
      return {};
    case challengeConstants.CHALLENGE_SUCCESS:
      return { payload: action.notificationRequest };
    case challengeConstants.CHALLENGE_FAILURE:
      return {};
    default:
      return state;
  }
};

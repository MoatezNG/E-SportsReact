import {
  acceptednotifConstants,
  notifConstants,
  challengeConstants,
  unreadednotifConstants,
} from "../_constants";

export const notification = (state = [], action) => {
  switch (action.type) {
    case notifConstants.NOTIF_REQUEST:
      return [];
    case notifConstants.NOTIF_SUCCESS:
      return action.notification;
    case notifConstants.NOTIF_FAILURE:
      return [];
    case "ACCEPT_NOTIFICATION":
      const newState = state.filter(
        (notification) => notification._id !== action.notificationId
      );
      return newState;

    default:
      return state;
  }
};

export const unread = (state = [], action) => {
  switch (action.type) {
    case unreadednotifConstants.UN_REQUEST:
      return [];
    case unreadednotifConstants.UN_SUCCESS:
      return action.unread;
    case unreadednotifConstants.UN_FAILURE:
      return [];
    default:
      return state;
  }
};
export const acceptednotification = (state = [], action) => {
  switch (action.type) {
    case acceptednotifConstants.NOTIFACC_REQUEST:
      return [];
    case acceptednotifConstants.NOTIFACC_SUCCESS:
      return action.acceptednotification;
    case acceptednotifConstants.NOTIFACC_FAILURE:
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
      return action.notificationRequest;
    case challengeConstants.CHALLENGE_FAILURE:
      return {};
    default:
      return state;
  }
};

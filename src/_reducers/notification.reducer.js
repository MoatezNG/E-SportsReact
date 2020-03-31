import { notifConstants } from "../_constants";

export const notification = (state = {}, action) => {
  switch (action.type) {
    case notifConstants.NOTIF_REQUEST:
      return {
        loading: true
      };
    case notifConstants.NOTIF_SUCCESS:
      return action.notification;
    case notifConstants.NOTIF_FAILURE:
      return [];
    default:
      return state;
  }
};

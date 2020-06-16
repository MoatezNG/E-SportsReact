import { alertConstants } from "../_constants";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(error) {
  return {
    type: alertConstants.ERROR,
    message: typeof error === "object" ? error.message : error
  };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

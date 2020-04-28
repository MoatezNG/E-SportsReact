import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";



function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll().then(
      user => dispatch(success(user)),
      error => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function register(user) {
  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())

    userService
      .register(user)
      .then(response => {
        dispatch(success(response))
        history.push('/')
      })
      .catch(error => {
        dispatch(failure(error));
      })
  }
}

function updateUser(user) {
  function request() {
    return { type: userConstants.UPDATE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.UPDATE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.UPDATE_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())

    userService
      .updateUser(user)
      .then(response => {
        dispatch(success(response))
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
}

function updatePassword(user) {
  function request() {
    return { type: userConstants.UPDATE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.UPDATE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.UPDATE_FAILURE, error };
  }

  return dispatch => {
    dispatch(request())

    userService
      .updateUser(user)
      .then(response => {
        dispatch(success(response))
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
}
export const userActions = {
  login,
  logout,
  getAll,
  register,
  updateUser,
  updatePassword
};
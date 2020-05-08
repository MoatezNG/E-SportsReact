import { userConstants } from "../_constants";

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
      }
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };   
      case userConstants.GETALL_USERS_REQUEST:
          return {...state, users: action.data }
    default:
      return state;
  }
}

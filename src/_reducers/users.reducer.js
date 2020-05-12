import { userConstants } from "../_constants";

export function users(state = {selectedUser: {}}, action) {
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
    
      case userConstants.GET_ALL_USERS_SUCCESS:
          return {...state, users: action.users }
      case userConstants.SELECT_USER:
        return   {...state, selectedUser: action.user}  
    default:
      return state;
  }
}

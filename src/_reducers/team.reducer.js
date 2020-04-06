import { teamConstants } from "../_constants";

export const findTeam = (state = {}, action) => {
  switch (action.type) {
    case teamConstants.FINDTEAM_REQUEST:
      return [];
    case teamConstants.FINDTEAM_SUCCESS:
      return action.findTeam;
    case teamConstants.FINDTEAM_FAILURE:
      return [];
    default:
      return state;
  }
};
export const teams = (state = [], action) => {
  switch (action.type) {
    case teamConstants.TEAMS_SUCCESS:
      return action.teams;
    default:
      return state;
  }
};

import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_NOT_FOUND,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case PROFILE_NOT_FOUND:
      return {};
    case GET_PROFILES:
      return {};
    case CLEAR_CURRENT_PROFILE:
      return {};
    default:
      return state;
  }
}

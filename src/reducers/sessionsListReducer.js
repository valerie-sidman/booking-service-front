import {
  SESSIONS_LIST_FAILURE,
  SESSIONS_LIST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  sessions: [],
  sessionsError: null,
}

export default function sessionsListReducer(state = initialState, action) {
  switch (action.type) {
    case SESSIONS_LIST_FAILURE:
      const { sessionsError } = action.payload;
      return {
        ...state,
        sessionsError,
      }
    case SESSIONS_LIST_SUCCESS:
      const { sessions } = action.payload;
      return {
        ...state,
        sessions,
        sessionsError: null,
      }
    default:
      return state;
  }
}
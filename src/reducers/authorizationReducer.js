import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  CHANGE_FIELD
} from '../actions/actionTypes';

const initialState = {
  login: '',
  password: '',
  result: '',
  error: null,
}

export default function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      }
    case AUTHORIZATION_SUCCESS:
      const { result } = action.payload;
      return {
        ...state,
        result,
        error: null
      }
    case CHANGE_FIELD: 
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
}

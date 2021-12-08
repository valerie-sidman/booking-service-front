import { HALL_ADDING_FAILURE, CHANGE_FIELD } from '../actions/actionTypes';

const initialState = {
  name: '',
  error: null 
}

export default function hallAddingReducer(state = initialState, action) {
  switch (action.type) {
    case HALL_ADDING_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
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

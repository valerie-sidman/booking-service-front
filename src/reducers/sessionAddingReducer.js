import { CHANGE_FIELD } from '../actions/actionTypes';

const initialState = {
  movieId: '',
  hallId: '',
  hours: '', 
  minutes: ''
}

export default function sessionAddingReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
}
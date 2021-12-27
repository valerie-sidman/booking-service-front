import { CHANGE_FIELD } from '../actions/actionTypes';

const initialState = {
  name: '',
  description: '',
  duration: '', 
  production_country: ''
}

export default function movieAddingReducer(state = initialState, action) {
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
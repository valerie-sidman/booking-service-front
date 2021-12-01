import {
  CHANGE_FIELD,
  CATCHING_INFO_BY_CLICKING_ON_HALL
} from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  numOfRows: '',
  numOfSeats: '',
}

export default function catchingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case CATCHING_INFO_BY_CLICKING_ON_HALL:
      const { id, name, numOfRows, numOfSeats } = action.payload;
      return {
        ...state,
        id,
        name,
        numOfRows,
        numOfSeats,
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

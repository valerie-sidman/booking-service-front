import {
  SEATS_LIST_FAILURE,
  SEATS_LIST_SUCCESS,
  SEATS_LIST_UPDATE,
} from '../actions/actionTypes';

const initialState = {
  seats: [],
  error: null,
}

export default function seatsListReducer(state = initialState, action) {
  switch (action.type) {
    case SEATS_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      }
    case SEATS_LIST_SUCCESS:
      const { seats } = action.payload;
      return {
        ...state,
        seats,
        error: null,
      }
    case SEATS_LIST_UPDATE:
      const { updatedSeatsList } = action.payload;
      return {
        ...state,
        seats: updatedSeatsList,
        error: null,
      }
    default:
      return state;
  }
}
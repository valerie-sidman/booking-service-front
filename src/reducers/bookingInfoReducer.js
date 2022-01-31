import { BOOKING_INFO_MANAGEMENT } from '../actions/actionTypes';

const initialState = {
  sessionId: '',
  movieName: '',
  hallId: '',
  hallName: '',
  hours: '',
  minutes: '',
  date: '',
}

export default function bookingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKING_INFO_MANAGEMENT:
      const { sessionId, movieName, hallId, hallName, hours, minutes, date } = action.payload;
      return {
        ...state,
        sessionId,
        movieName,
        hallId,
        hallName,
        hours,
        minutes,
        date
      }
        default:
      return state;
  }
}

import { BOOKING_INFO_MANAGEMENT, BOOKING_SEATS } from '../actions/actionTypes';

const initialState = {
  sessionId: '',
  movieName: '',
  hallId: '',
  hallName: '',
  hallVipPrice: '',
  hallRegularPrice: '',
  hours: '',
  minutes: '',
  date: '',
  seats: [{
    id: '',
    number: '',
    type: ''
  }],
}

export default function bookingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKING_INFO_MANAGEMENT:
      const { sessionId, movieName, hallId, hallName, hallVipPrice, hallRegularPrice, hours, minutes, date } = action.payload;
      return {
        ...state,
        sessionId,
        movieName,
        hallId,
        hallName,
        hallVipPrice,
        hallRegularPrice,
        hours,
        minutes,
        date
      }
      case BOOKING_SEATS:
      const { seats } = action.payload;
      return {
        ...state,
        seats
      }
        default:
      return state;
  }
}

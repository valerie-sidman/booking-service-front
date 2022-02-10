import { 
  BOOKING_INFO_MANAGEMENT, 
  BOOKING_SEATS,
  CREATING_TICKET_SUCCESS
 } from '../actions/actionTypes';

const initialState = {
  sessionId: '',
  movieName: '',
  hallId: '',
  hallName: '',
  hallVipPrice: '',
  hallRegularPrice: '',
  hours: '',
  minutes: '',
  seats: [{
    id: '',
    number: '',
    row: '',
    type: ''
  }],
  qr: '',
}

export default function bookingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKING_INFO_MANAGEMENT:
      const { sessionId, movieName, hallId, hallName, hallVipPrice, hallRegularPrice, hours, minutes } = action.payload;
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
      }
      case BOOKING_SEATS:
      const { seats } = action.payload;
      return {
        ...state,
        seats
      }
      case CREATING_TICKET_SUCCESS:
      const { qr } = action.payload;
      return {
        ...state,
        qr
      }
        default:
      return state;
  }
}

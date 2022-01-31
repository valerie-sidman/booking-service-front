import { CALENDAR_MANAGEMENT, SELECT_DAY } from '../actions/actionTypes';

const initialState = {
  week: [],
  selectedDay: ''
}

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_MANAGEMENT:
      const { week } = action.payload;
      return {
        ...state,
        week,
      }
    case SELECT_DAY:
      const { day } = action.payload;
      return {
        ...state,
        selectedDay: day,
      }
    default:
      return state;
  }
}

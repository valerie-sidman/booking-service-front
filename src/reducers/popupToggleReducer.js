import { 
  POPUP_ADDING_TOGGLE_HALL,
  POPUP_ADDING_TOGGLE_MOVIE,
  POPUP_ADDING_TOGGLE_SESSION,
  POPUP_DELETING_TOGGLE,
  POPUP_DELETING_TOGGLE_SESSION
 } from '../actions/actionTypes';

const initialState = {
  delId: '',
  delName: '',
  addingStatusHall: false,
  addingStatusMovie: false,
  addingStatusSession: false,
  deletingStatus: false,
  deletingStatusSession: false,
}

export default function popupToggleReducer(state = initialState, action) {
  switch (action.type) {
    case POPUP_ADDING_TOGGLE_HALL:
      const { addingStatusHall } = action.payload;
      return {
        ...state,
        addingStatusHall,
      }
      case POPUP_ADDING_TOGGLE_MOVIE:
      const { addingStatusMovie } = action.payload;
      return {
        ...state,
        addingStatusMovie,
      }
      case POPUP_ADDING_TOGGLE_SESSION:
      const { addingStatusSession } = action.payload;
      return {
        ...state,
        addingStatusSession,
      }
    case POPUP_DELETING_TOGGLE:
      const { deletingStatus, delId, delName } = action.payload;
      return {
        ...state,
        deletingStatus,
        delId,
        delName,
      }
      case POPUP_DELETING_TOGGLE_SESSION:
      const { deletingStatusSession } = action.payload;
      return {
        ...state,
        deletingStatusSession,
      }
    default:
      return state;
  }
}
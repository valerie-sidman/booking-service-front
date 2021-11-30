import { POPUP_ADDING_TOGGLE, POPUP_DELETING_TOGGLE } from '../actions/actionTypes';

const initialState = {
  delId: '',
  delName: '',
  addingStatus: false,
  deletingStatus: false
}

export default function popupToggleReducer(state = initialState, action) {
  switch (action.type) {
    case POPUP_ADDING_TOGGLE:
      const { addingStatus } = action.payload;
      return {
        ...state,
        addingStatus,
      }
    case POPUP_DELETING_TOGGLE:
      const { deletingStatus, delId, delName } = action.payload;
      return {
        ...state,
        deletingStatus,
        delId,
        delName
      }
    default:
      return state;
  }
}
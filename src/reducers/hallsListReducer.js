import {
  HALLS_LIST_FAILURE,
  HALLS_LIST_SUCCESS,
  HALL_ADDING_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  halls: [],
  error: null,
}

export default function hallsListReducer(state = initialState, action) {
  switch (action.type) {
    case HALLS_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      }
    case HALLS_LIST_SUCCESS:
      const { halls } = action.payload;
      return {
        ...state,
        halls,
        error: null,
      }
    case HALL_ADDING_SUCCESS:
      const { hall } = action.payload;
      halls.push(hall);
      console.log('Reducer adding suc HALLS ', halls);
      console.log('Reducer adding suc HALL ', hall);
      return {
        ...state,
        halls,
        error: null,
      }
    default:
      return state;
  }
}
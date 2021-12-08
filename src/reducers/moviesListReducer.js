import {
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  moviesError: null,
}

export default function moviesListReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_LIST_FAILURE:
      const { moviesError } = action.payload;
      return {
        ...state,
        moviesError,
      }
    case MOVIES_LIST_SUCCESS:
      const { movies } = action.payload;
      return {
        ...state,
        movies,
        moviesError: null,
      }
    default:
      return state;
  }
}
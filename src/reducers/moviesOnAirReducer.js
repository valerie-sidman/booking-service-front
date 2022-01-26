import { MOVIES_WITH_HALLS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  movies: [],
}

export default function moviesOnAirReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_WITH_HALLS_SUCCESS:
      const { movies } = action.payload;
      return {
        ...state,
        movies,
      }
    default:
      return state;
  }
}

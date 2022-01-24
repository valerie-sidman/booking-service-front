import {
  MOVIE_SUCCESS,
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  movie: {
    id: '',
    name: '',
    description: '',
    duration: '',
    production_country: '',
  },
  moviesError: null,
}

export default function moviesListReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_SUCCESS:
      const { movie } = action.payload;
      return {
        ...state,
        movie,
      }
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
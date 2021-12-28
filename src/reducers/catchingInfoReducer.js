import {
  CHANGE_FIELD_SCHEME,
  CHANGE_FIELD_PRICE,
  CATCHING_INFO_SCHEME,
  CATCHING_INFO_PRICE,
  CATCHING_INFO_SESSION_MOVIE_ID,
  CATCHING_INFO_SESSION_HALL_ID
} from '../actions/actionTypes';

const initialState = {

  halls: {
    hallIdForSchema: '',
    name: '',
    numOfRows: '',
    numOfSeats: '',
  },

  price: {
    hallIdForPrice: '',
    vip: '',
    regular: '',
  },

  sessionMovieId: {
    movieId: '',
  },

  sessionHallId: {
    hallId: '',
  },

}

export default function catchingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case CATCHING_INFO_SCHEME:
      const { hallIdForSchema, name, numOfRows, numOfSeats } = action.payload;
      return {
        ...state,
        halls: { hallIdForSchema, name, numOfRows, numOfSeats },
      }
    case CATCHING_INFO_PRICE:
      const { hallIdForPrice, vip, regular } = action.payload;
      return {
        ...state,
        price: { hallIdForPrice, vip, regular },
      }
    case CATCHING_INFO_SESSION_MOVIE_ID:
      const { movieId } = action.payload;
      return {
        ...state,
        sessionMovieId: { movieId },
      }
    case CATCHING_INFO_SESSION_HALL_ID:
      const { hallId } = action.payload;
      return {
        ...state,
        sessionHallId: { hallId },
      }
    case CHANGE_FIELD_SCHEME:
      return {
        ...state,
        halls: { ...state.halls, [action.payload.name]: action.payload.value },
      }
    case CHANGE_FIELD_PRICE:
      return {
        ...state,
        price: { ...state.price, [action.payload.name]: action.payload.value },
      }
    default:
      return state;
  }
}

import {
  CHANGE_FIELD_SCHEME,
  CHANGE_FIELD_PRICE,
  CATCHING_INFO_SCHEME,
  CATCHING_INFO_PRICE,
  CATCHING_INFO_SALE,
  CATCHING_INFO_SESSION_MOVIE_ID,
  CATCHING_INFO_SESSION_HALL_ID,
  CATCHING_INFO_SESSION_ID,
  CATCHING_INFO_DELITING_SESSION_MOVIE_ID
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

  sale: { 
    hallIdForSale: '', 
    open: false,
  },

  sessionMovieId: {
    sessionMovieId: '',
  },

  sessionHallId: {
    sessionHallId: '',
  },

  sessionDelMovieId: {
    sessionDelMovieId: '',
  },

  sessionId: {
    sessionId: '',
  }

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
    case CATCHING_INFO_SALE:
      const { hallIdForSale, open } = action.payload;
      return {
        ...state,
        sale: { hallIdForSale, open },
      }
    case CATCHING_INFO_SESSION_MOVIE_ID:
      const { sessionMovieId } = action.payload;
      return {
        ...state,
        sessionMovieId: { sessionMovieId },
      }
    case CATCHING_INFO_SESSION_HALL_ID:
      const { sessionHallId } = action.payload;
      return {
        ...state,
        sessionHallId: { sessionHallId },
      }
    case CATCHING_INFO_SESSION_ID:
      const { sessionId } = action.payload;
      return {
        ...state,
        sessionId: { sessionId },
      }
    case CATCHING_INFO_DELITING_SESSION_MOVIE_ID:
      const { sessionDelMovieId } = action.payload;
      return {
        ...state,
        sessionDelMovieId: { sessionDelMovieId },
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

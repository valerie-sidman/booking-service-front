import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  HALLS_LIST_FAILURE,
  HALLS_LIST_SUCCESS,
  HALL_ADDING_FAILURE,
  CATCHING_INFO_SCHEME,
  CATCHING_INFO_PRICE,
  CATCHING_INFO_SALE,
  CATCHING_INFO_SESSION_MOVIE_ID,
  CATCHING_INFO_SESSION_HALL_ID,
  CATCHING_INFO_SESSION_ID,
  CATCHING_INFO_DELITING_SESSION_MOVIE_ID,
  CALENDAR_MANAGEMENT,
  SELECT_DAY,
  BOOKING_INFO_MANAGEMENT,
  ROWS_SEATS_ADDING_FAILURE,
  SEATS_LIST_FAILURE,
  SEATS_LIST_SUCCESS,
  SEATS_LIST_UPDATE,
  SEATS_ADDING_FAILURE,
  PRICE_ADDING_FAILURE,
  MOVIE_SUCCESS,
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_SUCCESS,
  MOVIES_WITH_HALLS_SUCCESS,
  SESSIONS_LIST_FAILURE,
  SESSIONS_LIST_SUCCESS,
  POPUP_ADDING_TOGGLE_HALL,
  POPUP_ADDING_TOGGLE_MOVIE,
  POPUP_ADDING_TOGGLE_SESSION,
  POPUP_DELETING_TOGGLE,
  POPUP_DELETING_TOGGLE_SESSION,
  CHANGE_FIELD,
  CHANGE_FIELD_SCHEME,
  CHANGE_FIELD_PRICE
} from './actionTypes';

// AUTHORIZATION

export function authorizationFailure(error) {
  return {
    type: AUTHORIZATION_FAILURE,
    payload: { error }
  }
}

export function authorizationSuccess(result) {
  return {
    type: AUTHORIZATION_SUCCESS,
    payload: { result }
  }
}

export function authorization(dispatch, login, password) {
  fetch("http://localhost:8000/api/login", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ login, password }),
  }).then((res) => res.json())
    .then((result) => {
      console.log(result);
      dispatch(authorizationSuccess(result))
    })
    .catch((e) => {
      dispatch(authorizationFailure(e.message));
    })
}

// HALLS LIST

export function hallsListFailure(error) {
  return {
    type: HALLS_LIST_FAILURE,
    payload: { error }
  }
}

export function hallsListSuccess(halls) {
  return {
    type: HALLS_LIST_SUCCESS,
    payload: { halls }
  }
}

export function hallsListFetch(dispatch) {
  fetch("http://localhost:8000/api/halls", {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(hallsListSuccess(data))
    })
    .catch((e) => {
      dispatch(hallsListFailure(e.message))
    })
}

// HALL ADDING

export function hallAddingFailure(error) {
  return {
    type: HALL_ADDING_FAILURE,
    payload: { error }
  }
}

export function hallAdding(dispatch, name) {
  fetch("http://localhost:8000/api/halls", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ name, num_of_rows: 0, num_of_seats: 0, price_vip: 0, price_regular: 0 }),
  }).then((res) => res.json())
    .catch((e) => {
      dispatch(hallAddingFailure(e.message))
    })
}

// HALL DELETING

export function hallDeleting(id) {
  fetch(`http://localhost:8000/api/halls/${id}`, {
    method: 'DELETE'
  })
}

// ROWS SEATS ADDING

export function rowsSeatsAddingFailure(error) {
  return {
    type: ROWS_SEATS_ADDING_FAILURE,
    payload: { error }
  }
}

export function rowsSeatsAdding(dispatch, id, numOfRows, numOfSeats) {
  fetch(`http://localhost:8000/api/halls/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({
      num_of_rows: numOfRows,
      num_of_seats: numOfSeats
    }),
  }).then((res) => res.json())
    .catch((e) => {
      dispatch(rowsSeatsAddingFailure(e.message))
    })
}

// SEATS LIST 

export function seatsListFailure(error) {
  return {
    type: SEATS_LIST_FAILURE,
    payload: { error }
  }
}

export function seatsListSuccess(seats) {
  return {
    type: SEATS_LIST_SUCCESS,
    payload: { seats }
  }
}

export function seatsListFetch(dispatch, hallId) {
  fetch(`http://localhost:8000/api/seats/hall/${hallId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(seatsListSuccess(data))
    })
    .catch((e) => {
      dispatch(seatsListFailure(e.message))
    })
}

export function seatsListUpdate(updatedSeatsList) {
  return {
    type: SEATS_LIST_UPDATE,
    payload: { updatedSeatsList }
  }
}

// SEATS ADDING

export function seatsAddingFailure(error) {
  return {
    type: SEATS_ADDING_FAILURE,
    payload: { error }
  }
}

export function seatsAdding(dispatch, hallId, seats) {
  fetch(`http://localhost:8000/api/seats/hall/${hallId}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ seats }),
  }).then((res) => res.json())
    .catch((e) => {
      dispatch(seatsAddingFailure(e.message))
    })
}

// PRICE ADDING

export function priceAddingFailure(error) {
  return {
    type: PRICE_ADDING_FAILURE,
    payload: { error }
  }
}

export function priceAdding(dispatch, hallId, vip, regular) {
  fetch(`http://localhost:8000/api/halls/${hallId}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({
      price_vip: vip,
      price_regular: regular
    }),
  }).then((res) => res.json())
    .catch((e) => {
      dispatch(priceAddingFailure(e.message))
    })
}

// GET ONE MOVIE

export function movieSuccess(movie) {
  return {
    type: MOVIE_SUCCESS,
    payload: { movie }
  }
}

export function movieFetch(dispatch, movieId) {
  fetch(`http://localhost:8000/api/movies/${movieId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(movieSuccess(data))
    })
}

// MOVIES LIST

export function moviesListFailure(error) {
  return {
    type: MOVIES_LIST_FAILURE,
    payload: { error }
  }
}

export function moviesListSuccess(movies) {
  return {
    type: MOVIES_LIST_SUCCESS,
    payload: { movies }
  }
}

export function moviesListFetch(dispatch) {
  fetch("http://localhost:8000/api/movies", {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(moviesListSuccess(data))
    })
    .catch((e) => {
      dispatch(moviesListFailure(e.message))
    })
}

export function moviesWithHallsSuccess(movies) {
  return {
    type: MOVIES_WITH_HALLS_SUCCESS,
    payload: { movies }
  }
}

export function moviesWithHalls(dispatch) {
  fetch("http://localhost:8000/api/movies/halls", {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(moviesWithHallsSuccess(data))
    })
}

// MOVIE ADDING

export function movieAdding(dispatch, name, description, duration, production_country, img_url) {
  fetch("http://localhost:8000/api/movies", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ name, description, duration, production_country, img_url  }),
  }).then((res) => res.json())
}

// SESSIONS LIST

export function sessionsListFailure(error) {
  return {
    type: SESSIONS_LIST_FAILURE,
    payload: { error }
  }
}

export function sessionsListSuccess(sessions) {
  return {
    type: SESSIONS_LIST_SUCCESS,
    payload: { sessions }
  }
}

export function sessionsListFetch(dispatch) {
  fetch("http://localhost:8000/api/halls/sessions", {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((res) => res.json())
    .then((data) => {
      dispatch(sessionsListSuccess(data))
    })
    .catch((e) => {
      dispatch(sessionsListFailure(e.message))
    })
}

// SESSION ADDING

export function sessionAdding(dispatch, movieId, hallId, hours, minutes) {
  fetch("http://localhost:8000/api/sessions", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ movie_id: movieId, hall_id: hallId, hours, minutes }),
  }).then((res) => res.json())
}

// SESSION DELETING

export function sessionDeleting(id) {
  fetch(`http://localhost:8000/api/sessions/${id}`, {
    method: 'DELETE'
  })
}

// SALE STATUS 

export function changeSaleStatus(dispatch, hallIdForSale, saleStatus) {
  fetch(`http://localhost:8000/api/halls/${hallIdForSale}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({
      open: saleStatus,
    }),
  }).then((res) => res.json())
    .then((data) => dispatch(catchingInfoSale(
      data.id,
      data.open,
    )))
}

// POPUP TOGGLE

export function popupAddingToggleHall(addingStatusHall) {
  return {
    type: POPUP_ADDING_TOGGLE_HALL,
    payload: { addingStatusHall },
  }
}

export function popupAddingToggleMovie(addingStatusMovie) {
  return {
    type: POPUP_ADDING_TOGGLE_MOVIE,
    payload: { addingStatusMovie },
  }
}

export function popupAddingToggleSession(addingStatusSession) {
  return {
    type: POPUP_ADDING_TOGGLE_SESSION,
    payload: { addingStatusSession },
  }
}

export function popupDeletingToggle(deletingStatus, delId, delName) {
  return {
    type: POPUP_DELETING_TOGGLE,
    payload: { deletingStatus, delId, delName },
  }
}

export function popupDeletingToggleSession(deletingStatusSession) {
  return {
    type: POPUP_DELETING_TOGGLE_SESSION,
    payload: { deletingStatusSession },
  }
}

// CATCHING INFO

export function catchingInfoScheme(hallIdForSchema, name, numOfRows, numOfSeats) {
  return {
    type: CATCHING_INFO_SCHEME,
    payload: { hallIdForSchema, name, numOfRows, numOfSeats }
  }
}

export function catchingInfoPrice(hallIdForPrice, vip, regular) {
  return {
    type: CATCHING_INFO_PRICE,
    payload: { hallIdForPrice, vip, regular }
  }
}

export function catchingInfoSale(hallIdForSale, open) {
  return {
    type: CATCHING_INFO_SALE,
    payload: { hallIdForSale, open }
  }
}

export function catchingInfoSessionMovieId(sessionMovieId) {
  return {
    type: CATCHING_INFO_SESSION_MOVIE_ID,
    payload: { sessionMovieId }
  }
}

export function catchingInfoSessionHallId(sessionHallId) {
  return {
    type: CATCHING_INFO_SESSION_HALL_ID,
    payload: { sessionHallId }
  }
}

export function catchingInfoSessionId(sessionId) {
  return {
    type: CATCHING_INFO_SESSION_ID,
    payload: { sessionId }
  }
}

export function catchingInfoDeletingSessionMovieId(sessionDelMovieId) {
  return {
    type: CATCHING_INFO_DELITING_SESSION_MOVIE_ID,
    payload: { sessionDelMovieId }
  }
}

// CALENDAR MANAGEMENT

export function calendarManagement(week) {
  return {
    type: CALENDAR_MANAGEMENT,
    payload: { week }
  }
}

export function selectDay(day) {
  return {
    type: SELECT_DAY,
    payload: { day }
  }
}

// BOOKING INFO

export function bookingInfoManagement( sessionId, movieName, hallId, hallName, hours, minutes, date) {
  return {
    type: BOOKING_INFO_MANAGEMENT,
    payload: { sessionId, movieName, hallId, hallName, hours, minutes, date }
  }
}

// CHANGE FIELD

export function changeField(name, value) {
  return {
    type: CHANGE_FIELD,
    payload: { name, value }
  }
}

export function changeFieldScheme(name, value) {
  return {
    type: CHANGE_FIELD_SCHEME,
    payload: { name, value }
  }
}

export function changeFieldPrice(name, value) {
  return {
    type: CHANGE_FIELD_PRICE,
    payload: { name, value }
  }
}
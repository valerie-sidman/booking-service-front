import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  HALLS_LIST_FAILURE,
  HALLS_LIST_SUCCESS,
  HALL_ADDING_FAILURE,
  CATCHING_INFO_BY_CLICKING_ON_HALL,
  ROWS_SEATS_ADDING_FAILURE,
  SEATS_LIST_FAILURE,
  SEATS_LIST_SUCCESS,
  SEATS_ADDING_FAILURE,
  POPUP_ADDING_TOGGLE,
  POPUP_DELETING_TOGGLE,
  CHANGE_FIELD,
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
    body: JSON.stringify({ name, num_of_rows: 0, num_of_seats: 0 }),
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

// CATCHING INFO BY CLICKING ON HALL

export function catchingInfoByClickingOnHall(id, name, numOfRows, numOfSeats) {
  return {
    type: CATCHING_INFO_BY_CLICKING_ON_HALL,
    payload: { id, name, numOfRows, numOfSeats }
  }
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

// SEATS ADDING

export function seatsAddingFailure(error) {
  return {
    type: SEATS_ADDING_FAILURE,
    payload: { error }
  }
}

export function seatsAdding(dispatch, seats) {
  fetch("http://localhost:8000/api/seats", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify(seats),
  }).then((res) => res.json())
    .catch((e) => {
      dispatch(seatsAddingFailure(e.message))
    })
}

// POPUP TOGGLE

export function popupAddingToggle(addingStatus) {
  return {
    type: POPUP_ADDING_TOGGLE,
    payload: { addingStatus },
  }
}

export function popupDeletingToggle(deletingStatus, delId, delName) {
  return {
    type: POPUP_DELETING_TOGGLE,
    payload: { deletingStatus, delId, delName },
  }
}

// CHANGE FIELD

export function changeField(name, value) {
  return {
    type: CHANGE_FIELD,
    payload: { name, value }
  }
}
import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  HALLS_LIST_FAILURE,
  HALLS_LIST_SUCCESS,
  HALL_ADDING_FAILURE,
  HALL_ADDING_SUCCESS,
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

export function hallAddingSuccess(hall) {
  return {
    type: HALL_ADDING_SUCCESS,
    payload: { hall }
  }
}

export function hallAdding(dispatch, name) {
  fetch("http://localhost:8000/api/halls", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ name }),
  }).then((res) => res.json())
    .then((data) => {
      console.log("Creators", data);
      dispatch(hallAddingSuccess(data))
    })
    .catch((e) => {
      dispatch(hallAddingFailure(e.message))
    })
}

// CHANGE FIELD

export function changeField(name, value) {
  return {
    type: CHANGE_FIELD,
    payload: { name, value }
  }
}
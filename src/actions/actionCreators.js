import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  HALLS_LIST_FAILURE,
  HALLS_LIST_SUCCESS,
  HALL_ADDING_FAILURE,
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
    body: JSON.stringify({ name }),
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
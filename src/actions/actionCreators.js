import { 
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  CHANGE_FIELD,
} from './actionTypes';

// AUTHORIZATION

export function authorizationFailure(authorizationError) {
  return {
    type: AUTHORIZATION_FAILURE,
    payload: { authorizationError }
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
          if (result.result === 'Ok') {
            console.log('Succes', result);
          } else {
            alert("Incorrect login or password. Try again.");
            console.log('Error', result);
          }
          return result;
        })
      .then((result) => {
        dispatch(authorizationSuccess(result))
      })
      .catch((e) => {
        dispatch(authorizationFailure(e.message))
      })
}

// CHANGE FIELD

export function changeField(name, value) {
  return {
    type: CHANGE_FIELD,
    payload: { name, value }
  }
}
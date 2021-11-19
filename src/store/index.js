import { createStore, combineReducers } from "redux";
import authorizationReducer from "../reducers/authorizationReducer.js";
import hallsListReducer from "../reducers/hallsListReducer.js";
import hallAddingReducer from "../reducers/hallAddingReducer.js";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const reducer = combineReducers({
  serviceAuthorization: authorizationReducer,
  serviceHallsList: hallsListReducer,
  serviceHallAdding: hallAddingReducer,
})

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

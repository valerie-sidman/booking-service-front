import { createStore, combineReducers } from "redux";
import authorizationReducer from "../reducers/authorizationReducer.js";
import hallsListReducer from "../reducers/hallsListReducer.js";
import hallAddingReducer from "../reducers/hallAddingReducer.js";
import popupToggleReducer from "../reducers/popupToggleReducer.js";
import catchingInfoReducer from "../reducers/catchingInfoReducer.js";
import seatsListReducer from "../reducers/seatsListReducer.js";
import moviesListReducer from "../reducers/moviesListReducer.js";
import movieAddingReducer from "../reducers/movieAddingReducer.js";
import sessionsListReducer from "../reducers/sessionsListReducer.js";
import sessionAddingReducer from "../reducers/sessionAddingReducer.js";

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
  servicePopupToggle: popupToggleReducer,
  serviceCatchingInfo: catchingInfoReducer,
  serviceSeatsList: seatsListReducer,
  serviceMoviesList: moviesListReducer,
  serviceMovieAdding: movieAddingReducer,
  serviceSessionsList: sessionsListReducer,
  serviceSessionAdding: sessionAddingReducer,
})

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

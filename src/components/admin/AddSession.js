import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import {
  sessionAdding,
  sessionsListFetch,
  popupAddingToggleSession,
  changeField
} from '../../actions/actionCreators';

export default function AddSession(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { halls } = useSelector(state => state.serviceHallsList);
  const { movies } = useSelector(state => state.serviceMoviesList);
  const { sessionMovieId } = useSelector(state => state.serviceCatchingInfo).sessionMovieId;
  const { sessionHallId } = useSelector(state => state.serviceCatchingInfo).sessionHallId;
  const { movieId, hallId, hours, minutes } = useSelector(state => state.serviceSessionAdding);

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
    dispatch(changeField("hours", value.split(':')[0]));
    dispatch(changeField("minutes", value.split(':')[1]));
  }

  const handleSelectHall = (e) => {
    dispatch(changeField("hallId", e.target.value));
  }

  const handleSelectMovie = (e) => {
    dispatch(changeField("movieId", e.target.value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    sessionAdding(dispatch, movieId ? movieId : sessionMovieId, hallId ? hallId : sessionHallId, hours, minutes);
    sessionsListFetch(dispatch);
    dispatch(changeField("movieId", ''));
    dispatch(changeField("hallId", ''));
    dispatch(changeField("hours", ''));
    dispatch(changeField("minutes", ''));
    dispatch(changeField("time", ''));
  }

  const handleRedirect = () => {
    navigate("/admin/authorized");
    dispatch(popupAddingToggleSession(false));
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Добавление сеанса">
        <form action="add_movie" method="post" acceptCharset="utf-8" onSubmit={handleSubmit}>

          <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
            Выберите зал
            <select className="conf-step__input" name="hall" onChange={handleSelectHall} required>{
              // eslint-disable-next-line eqeqeq
              halls.map((hall) => <option key={hall.id} value={hall.id}  selected={hall.id == sessionHallId}>{hall.name}</option>)
            }</select>
          </label>

          <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
            Время начала
            <input className="conf-step__input" type="time" name="time" onChange={handleChange} required />
          </label>

          <label className="conf-step__label conf-step__label-fullsize" htmlFor="movie">
            Выберите фильм
            <select className="conf-step__input" name="movie" onChange={handleSelectMovie} required>{
              // eslint-disable-next-line eqeqeq
              movies.map((movie) => <option key={movie.id} value={movie.id} selected={movie.id == sessionMovieId}>{movie.name}</option>)
            }</select>
          </label>

          <PopupControls title="Добавить сеанс" action={handleRedirect} />

        </form>
      </Popup>
    </React.Fragment>
  )
}

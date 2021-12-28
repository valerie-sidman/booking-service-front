import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import {
  hallsListFetch,
  moviesListFetch,
  sessionAdding,
  popupAddingToggleSession,
  changeField
} from '../../actions/actionCreators';

export default function AddSession(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { halls } = useSelector(state => state.serviceHallsList);
  const { movies } = useSelector(state => state.serviceMoviesList);
  const { movieId, hallId, hours, minutes } = useSelector(state => state.serviceSessionsAdding);

  useEffect(() => {
    moviesListFetch(dispatch);
    hallsListFetch(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    sessionAdding(dispatch, movieId, hallId, hours, minutes);
    dispatch(changeField("movieId", ''));
    dispatch(changeField("hallId", ''));
    dispatch(changeField("hours", ''));
    dispatch(changeField("minutes", ''));
  }

  const handleRedirect = () => {
    navigate("/admin/authorized");
    dispatch(popupAddingToggleSession(false));
  }

  const time = hours + ':' + minutes;

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Добавление сеанса">
        <form action="add_movie" method="post" accept-charset="utf-8" onSubmit={handleSubmit}>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
            Выберите зал
            <select className="conf-step__input" name="hall" required>{
              halls.map((hall) => <option key={hall.id} value={hall.id}>{hall.name}</option>)
            }</select>
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
            Время начала
            <input className="conf-step__input" type="time" value={time} name="time" onChange={handleChange} required />
          </label>

          <label className="conf-step__label conf-step__label-fullsize" htmlFor="movie">
            Выберите фильм
            <select className="conf-step__input" name="movie" required>{
              movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.name}</option>)
            }</select>
          </label>
          <PopupControls title="Добавить сеанс" action={handleRedirect} />
        </form>
      </Popup>
    </React.Fragment>
  )
}

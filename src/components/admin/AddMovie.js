import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import { 
  moviesListFetch,
  movieAdding,
  popupAddingToggleMovie,
  changeField 
} from '../../actions/actionCreators';

export default function AddMovie(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { name, description, duration, production_country, img_url } = useSelector(state => state.serviceMovieAdding);

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    movieAdding(dispatch, name, description, duration, production_country, img_url);
    moviesListFetch(dispatch);
    dispatch(changeField("name", ''));
    dispatch(changeField("description", ''));
    dispatch(changeField("duration", ''));
    dispatch(changeField("production_country", ''));
    dispatch(changeField("img_url", ''));
  }

  const handleRedirect = () => {
    navigate("/admin/authorized");
    dispatch(popupAddingToggleMovie(false));
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Добавление фильма">
        <form action="add_movie" method="post" acceptCharset="utf-8" onSubmit={handleSubmit}>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название фильма
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name" value={name} onChange={handleChange} required />
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="description">
            Описание фильма
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;Жили-были...&raquo;" name="description" value={description} onChange={handleChange} required />
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
            Длительность фильма в минутах
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;140&raquo;" name="duration" value={duration} onChange={handleChange} required />
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="production_country">
            Страна производства фильма
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;СССР&raquo;" name="production_country" value={production_country} onChange={handleChange} required />
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="production_country">
            URL постера фильма
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;https://poster/300x450&raquo;" name="img_url" value={img_url} onChange={handleChange} required />
          </label>
          <PopupControls title="Добавить фильм" action={handleRedirect} />
        </form>
      </Popup>
    </React.Fragment>
  )

}

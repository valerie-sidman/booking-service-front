import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import { 
  hallsListFetch, 
  hallAdding, 
  hallAddingFailure, 
  popupAddingToggle,
  changeField 
} from '../../actions/actionCreators';

export default function AddHall(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { name, error } = useSelector(state => state.serviceHallAdding);

  useEffect(() => {
    if (error) {
      dispatch(hallAddingFailure(''));
    } 
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    hallAdding(dispatch, name);
    hallsListFetch(dispatch);
  }

  const handleRedirect = () => {
    navigate("/admin/authorized");
    dispatch(popupAddingToggle(false));
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Добавление зала">
        <form action="add_hall" method="post" acceptCharset="utf-8" onSubmit={handleSubmit}>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название зала
            <input className="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" value={name} onChange={handleChange} required />
          </label>
          <PopupControls title="Добавить зал" action={handleRedirect} />
        </form>
      </Popup>
    </React.Fragment>
  )
}

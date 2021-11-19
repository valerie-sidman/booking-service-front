import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PopupAdding from './PopupAdding';
import PopupControls from './PopupControls';
import { hallAdding, hallAddingFailure, changeField } from '../../actions/actionCreators';

export default function AddHall() {

  const { name, error } = useSelector(state => state.serviceHallAdding);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(hallAddingFailure(''));
    } else {
      // navigate("/admin/authorized");
    }
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Added new hall");
    hallAdding(dispatch, name);
  }

  return (
    <React.Fragment>
      <PopupAdding title="Добавление зала">
        <form action="add_hall" method="post" acceptCharset="utf-8" onSubmit={handleSubmit}>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название зала
            <input className="conf-step__inputв" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" value={name} onChange={handleChange} required />
          </label>
          <PopupControls title="Добавить зал" />
        </form>
      </PopupAdding>
    </React.Fragment>
  )
}

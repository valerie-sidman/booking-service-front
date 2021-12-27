import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import { 
  sessionAdding,
  popupAddingToggle,
  changeField 
} from '../../actions/actionCreators';

export default function AddSession(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { movieId, hallId, hours, minutes } = useSelector(state => state.serviceSessionsAdding);

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
    dispatch(popupAddingToggle(false));
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Добавление сеанса">
        {/* сделать форму добавления сеанса */}
      </Popup>
    </React.Fragment>
  )


}

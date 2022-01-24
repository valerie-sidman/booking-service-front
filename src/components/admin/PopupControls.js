import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
  popupAddingToggleHall, 
  popupAddingToggleMovie,
  popupAddingToggleSession,
  popupDeletingToggle,
  popupDeletingToggleSession
} from '../../actions/actionCreators';

export default function PopupControls(props) {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleСancel = (evt) => {
    evt.preventDefault();
    navigate("/admin/authorized");
    dispatch(popupAddingToggleHall(false));
    dispatch(popupAddingToggleMovie(false));
    dispatch(popupAddingToggleSession(false));
    dispatch(popupDeletingToggle(false));
    dispatch(popupDeletingToggleSession(false));
  }

  return (
    <React.Fragment>
      <div className="conf-step__buttons text-center">
        <input type="submit" value={props.title} className="conf-step__button conf-step__button-accent" onClick={props.action}/>
        <button className="conf-step__button conf-step__button-regular" onClick={handleСancel}>Отменить</button>
      </div>
    </React.Fragment>
  )
}

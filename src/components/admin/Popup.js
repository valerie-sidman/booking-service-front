import React from 'react';
import { useDispatch } from 'react-redux';
import closeImg from '../../i/close.png';
import { 
  popupAddingToggleHall, 
  popupAddingToggleMovie,
  popupAddingToggleSession,
  popupDeletingToggle,
  popupDeletingToggleSession
} from '../../actions/actionCreators';

export default function Popup(props) {

  const dispatch = useDispatch();

  const handleClosePopup = (evt) => {
    evt.preventDefault();
    dispatch(popupAddingToggleHall(false));
    dispatch(popupAddingToggleMovie(false));
    dispatch(popupAddingToggleSession(false));
    dispatch(popupDeletingToggle(false));
    dispatch(popupDeletingToggleSession(false));
  }

  return (
    <React.Fragment>
      <div className={props.toggleActiveState}>
        <div className="popup__container">
          <div className="popup__content">
            <div className="popup__header">
              <h2 className="popup__title">
                {props.title}
                <a className="popup__dismiss" href="/admin/authorized"><img src={closeImg} alt="Закрыть" onClick={handleClosePopup}/></a>
              </h2>
            </div>
            <div className="popup__wrapper">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

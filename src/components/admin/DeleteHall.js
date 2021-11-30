import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import { hallsListFetch, hallDeleting, popupDeletingToggle } from '../../actions/actionCreators';

export default function DeleteHall(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRedirect = (id) => {
    hallDeleting(id);
    navigate("/admin/authorized");
    dispatch(popupDeletingToggle(false));
    hallsListFetch(dispatch);
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Удаление зала">
        <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{props.name}</span>?</p>
        <PopupControls title="Удалить зал" action={() => handleRedirect(props.id)} />
      </Popup>
    </React.Fragment>
  )
}

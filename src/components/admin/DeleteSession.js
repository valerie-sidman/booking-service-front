import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import PopupControls from './PopupControls';
import {
  sessionDeleting,
  sessionsListFetch,
  movieFetch,
  popupDeletingToggleSession,
} from '../../actions/actionCreators';
import { useEffect } from 'react';

export default function DeleteSession(props) {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { sessionDelMovieId } = useSelector(state => state.serviceCatchingInfo).sessionDelMovieId;
  const { sessionId } = useSelector(state => state.serviceCatchingInfo).sessionId;
  const { movie } = useSelector(state => state.serviceMoviesList);

  useEffect(() => {
    movieFetch(dispatch,sessionDelMovieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sessionDelMovieId]);

  const handleSubmit = evt => {
    evt.preventDefault();
    sessionDeleting(sessionId);
    sessionsListFetch(dispatch);
  }

  const handleRedirect = () => {
    navigate("/admin/authorized");
    dispatch(popupDeletingToggleSession(false));
    sessionsListFetch(dispatch);
  }

  return (
    <React.Fragment>
      <Popup toggleActiveState={props.active === true ? 'popup active' : 'popup'} title="Снятие фильма с сеанса">
        <form action="delete_hall" method="post" acceptCharset="utf-8" onSubmit={handleSubmit}>
          <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span>{movie.name}</span>?</p>
          <PopupControls title="Удалить" action={handleRedirect} />
        </form>
      </Popup>
    </React.Fragment>
  )
}

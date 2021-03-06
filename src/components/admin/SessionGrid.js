import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import {
  moviesListFailure,
  moviesListFetch,
  sessionsListFailure,
  sessionsListFetch,
  popupAddingToggleMovie,
  popupAddingToggleSession,
  popupDeletingToggleSession,
  catchingInfoSessionMovieId,
  catchingInfoSessionHallId,
  catchingInfoSessionId,
  catchingInfoDeletingSessionMovieId
} from '../../actions/actionCreators';

export default function SessionGrid() {

  const dispatch = useDispatch();
  const { halls } = useSelector(state => state.serviceHallsList);
  const { movies, moviesError } = useSelector(state => state.serviceMoviesList);
  const { sessions, sessionsError } = useSelector(state => state.serviceSessionsList);

  useEffect(() => {
    if (moviesError) {
      alert('Trying to fetch movies, but something wrong with backend', moviesError);
      dispatch(moviesListFailure(''));
    } else if (sessionsError) {
      alert('Trying to fetch sessions, but something wrong with backend', sessionsError);
      dispatch(sessionsListFailure(''));
    } else {
      moviesListFetch(dispatch);
      sessionsListFetch(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [halls]);

  const handlePopupAddingMovie = () => {
    dispatch(popupAddingToggleMovie(true));
  }

  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
   }

  function dragstart_handler_add(ev) {
    const draggingMovieId = ev.target.id;
    dispatch(catchingInfoSessionMovieId(draggingMovieId));
  }

  function drop_handler_add(ev) {
    const dropHallId = ev.target.closest('.conf-step__seances-hall').id;
    dispatch(catchingInfoSessionHallId(dropHallId));
    dispatch(popupAddingToggleSession(true));
  }

  function showDelPopup(ev) {
    const draggingDelMovieId = ev.target.id;
    const sessionId = ev.target.getAttribute('sessionid');
    console.log(sessionId);
    dispatch(catchingInfoSessionId(sessionId));
    dispatch(catchingInfoDeletingSessionMovieId(draggingDelMovieId));
    dispatch(popupDeletingToggleSession(true));
  }

  return (
    <React.Fragment>
      <ConfigSection >
        <ConfigHeader title="?????????? ??????????????" />
        <ConfigWrapper paragraph={<button className="conf-step__button conf-step__button-accent" onClick={handlePopupAddingMovie}>???????????????? ??????????</button>}>

          <div className="conf-step__movies">
            {movies.map((movie) =>
              <div id={movie.id} key={movie.id}  className="conf-step__movie" onDragStart={dragstart_handler_add} draggable="true">
                <img className="conf-step__movie-poster" alt={movie.name} src={movie.img_url} />
                <h3 className="conf-step__movie-title">{movie.name}</h3>
                <p className="conf-step__movie-duration">{movie.duration} ??????????</p>
              </div>
            )}
          </div>

          <div className="conf-step__seances" >
            {sessions.map((hall) =>
              <div id={hall.id} key={hall.id} className="conf-step__seances-hall" onDrop={drop_handler_add} onDragOver={dragover_handler}>
                <h3 className="conf-step__seances-title">{hall.name}</h3>
                <div className="conf-step__seances-timeline">
                  {hall.session.map((session) => {

                    const calculatedWidth = (Math.ceil(session.movie.duration / 10) * 5) + 'px';
                    const calculatedLeftMargin = ((session.hours * 30) + (Math.ceil(session.minutes / 10) * 5)) + 'px';

                    return <div id={session.movie.id} sessionid={session.id} key={session.id} title={session.movie.name} className="conf-step__seances-movie" onClick={showDelPopup} draggable="true" style={
                      {
                        width: calculatedWidth, backgroundColor: "rgb(133, 255, 137)", left: calculatedLeftMargin
                      }
                    }>
                      <p id={session.movie.id} sessionid={session.id} className="conf-step__seances-movie-title">{session.movie.name}</p>
                      <p className="conf-step__seances-movie-start">{session.hours}:{session.minutes}</p>
                    </div>
                  })}
                </div>
              </div>
            )}
          </div>

        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

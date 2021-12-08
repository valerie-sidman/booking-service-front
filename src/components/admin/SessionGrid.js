import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import poster from '../../i/poster.png';
import {
  moviesListFailure,
  moviesListFetch,
  sessionsListFailure,
  sessionsListFetch
} from '../../actions/actionCreators';

export default function SessionGrid() {

  const dispatch = useDispatch();
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
  }, []);

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Сетка сеансов" />
        <ConfigWrapper paragraph={<button className="conf-step__button conf-step__button-accent">Добавить фильм</button>}>

          <div className="conf-step__movies">
            {movies.map((movie) =>
              <div key={movie.id} className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src={poster} />
                <h3 className="conf-step__movie-title">{movie.name}</h3>
                <p className="conf-step__movie-duration">{movie.duration}</p>
              </div>
            )}
          </div>

          <div className="conf-step__seances">
            {sessions.map((hall) =>
              <div key={hall.id} className="conf-step__seances-hall">
                <h3 className="conf-step__seances-title">{hall.name}</h3>
                <div className="conf-step__seances-timeline">
                  {hall.session.map((session) =>
                    <div key={session.id} className="conf-step__seances-movie" style={{ width: "60px", backgroundColor: "rgb(133, 255, 137)", left: 0 }}>
                      <p className="conf-step__seances-movie-title">{session.movie.name}</p>
                      <p className="conf-step__seances-movie-start">{session.hours}:{session.minutes}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

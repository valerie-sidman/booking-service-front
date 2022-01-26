import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moviePoster from '/src/css-client/i/poster1.jpg';
import {
  hallsListFetch,
  moviesWithHalls,
  sessionsListFetch,
} from '../../actions/actionCreators';

export default function MoviesOnAir() {

  const { halls } = useSelector(state => state.serviceHallsList);
  const { movies } = useSelector(state => state.serviceMoviesOnAirReducer);
  const { sessions } = useSelector(state => state.serviceSessionsList);
  const dispatch = useDispatch();

  useEffect(() => {
    // hallsListFetch(dispatch);
    moviesWithHalls(dispatch);
    // sessionsListFetch(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredMovies = movies.filter((movie) => movie.hall.filter((hall) => hall.open === '1'));

  return (
    <React.Fragment>
      {filteredMovies.map((movie) =>
        <section className="movie">
          <div className="movie__info">
            <div className="movie__poster">
              <img className="movie__poster-image" alt="Постер фильма" src={moviePoster} />
            </div>
            <div className="movie__description">
              <h2 className="movie__title">{movie.name}</h2>
              <p className="movie__synopsis">{movie.description}</p>
              <p className="movie__data">
                <span className="movie__data-duration">{movie.duration}</span>
                <span className="movie__data-origin">{movie.country}</span>
              </p>
            </div>
          </div>

          {halls.map((hall) =>
            <div className="movie-seances__hall">
              <h3 className="movie-seances__hall-title">{hall.name}</h3>
              <ul className="movie-seances__list">
                {sessions.map(() =>
                  <li className="movie-seances__time-block">
                    <a className="movie-seances__time" href="hall.html">{}</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </section>
      )}
    </React.Fragment>
  )
}

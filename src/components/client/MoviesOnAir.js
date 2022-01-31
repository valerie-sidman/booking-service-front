import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  moviesWithHalls,
  bookingInfoManagement
} from '../../actions/actionCreators';

export default function MoviesOnAir() {

  const { movies } = useSelector(state => state.serviceMoviesOnAirReducer);
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    moviesWithHalls(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getBookingInfo(e, sessionId, movieName, hallId, hallName, hours, minutes,) {
    e.preventDefault();
    dispatch(bookingInfoManagement(sessionId, movieName, hallId, hallName, hours, minutes,));
    navigate("/client/booking");
  }

  return (
    <React.Fragment>
      {movies.map((movie) =>
        <section key={movie.id} className="movie">
          <div className="movie__info">
            <div className="movie__poster">
              <img className="movie__poster-image" alt={"Постер фильма " + movie.name} src={movie.img_url} />
            </div>
            <div className="movie__description">
              <h2 className="movie__title">{movie.name}</h2>
              <p className="movie__synopsis">{movie.description}</p>
              <p className="movie__data">
                <span className="movie__data-duration">{movie.duration} минут</span>
                <span className="movie__data-origin"> {movie.production_country}</span>
              </p>
            </div>
          </div>

          {movie.hall.map((hall) =>
            <div key={hall.id} className="movie-seances__hall">
              <h3 className="movie-seances__hall-title">{hall.name}</h3>
              <ul className="movie-seances__list">

                {hall.session.map((session) =>
                  <li key={session.id} className="movie-seances__time-block" onClick={
                    (e) => getBookingInfo(e, session.id, movie.name, hall.id, hall.name, session.hours, session.minutes)
                  }>
                    <a className="movie-seances__time" href="hall.html">{session.hours}:{session.minutes}</a>
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

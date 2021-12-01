import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  hallsListFetch,
  hallsListFailure,
  catchingInfoByClickingOnHall
} from '../../actions/actionCreators';

export default function HallsList() {

  const { halls, error } = useSelector(state => state.serviceHallsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert('Something wrong with backend', error);
      dispatch(hallsListFailure(''));
    } else if (halls) {
      hallsListFetch(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCatchingInfo(evt) {
    dispatch(catchingInfoByClickingOnHall(
      evt.target.parentElement.id,
      evt.target.parentElement.getAttribute('name'),
      evt.target.parentElement.getAttribute('numofrows'),
      evt.target.parentElement.getAttribute('numofseats'),
    ));
  }

  return (
    <React.Fragment>
      <ul className="conf-step__selectors-box">{
        halls.map((hall) =>
          <li id={hall.id} key={hall.id} name={hall.name} numofrows={hall.num_of_rows} numofseats={hall.num_of_seats}>
            <input type="radio" className="conf-step__radio" name="chairs-hall" value={hall.name} onClick={handleCatchingInfo} defaultChecked />
            <span className="conf-step__selector">{hall.name}</span>
          </li>)
      }</ul>
    </React.Fragment>
  )
}

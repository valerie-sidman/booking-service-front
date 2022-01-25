import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  hallsListFetch,
  hallsListFailure,
  catchingInfoScheme,
  catchingInfoPrice,
  catchingInfoSale,
  seatsListFetch,
} from '../../actions/actionCreators';

export default function HallsList(props) {

  const { halls, error } = useSelector(state => state.serviceHallsList);
  const { hallIdForSchema } = useSelector(state => state.serviceCatchingInfo).halls;
  const { hallIdForPrice } = useSelector(state => state.serviceCatchingInfo).price;
  const { hallIdForSale } = useSelector(state => state.serviceCatchingInfo).sale;
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert('Something wrong with backend', error);
      dispatch(hallsListFailure(''));
    } else if (halls) {
      hallsListFetch(dispatch);
      dispatch(catchingInfoScheme('', '', '', ''));
      dispatch(catchingInfoPrice('', '', ''));
      dispatch(catchingInfoSale('', false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCatchingInfo(evt) {
    if (props.type === 'scheme') {
      seatsListFetch(dispatch, evt.target.parentElement.id);
      dispatch(catchingInfoScheme(
        evt.target.parentElement.id,
        evt.target.parentElement.getAttribute('name'),
        evt.target.parentElement.getAttribute('numofrows'),
        evt.target.parentElement.getAttribute('numofseats'),
      ));
    } else if (props.type === 'price') {
      dispatch(catchingInfoPrice(
        evt.target.parentElement.id,
        evt.target.parentElement.getAttribute('vip'),
        evt.target.parentElement.getAttribute('regular'),
      ));
    } else if (props.type === 'sale') {
      dispatch(catchingInfoSale(
        evt.target.parentElement.id,
        evt.target.parentElement.getAttribute('open'),
      ));
    }
  }

  return (
    <React.Fragment>
      <ul className="conf-step__selectors-box">{
        halls.map((hall)  =>
          <li id={hall.id} key={hall.id} name={hall.name} numofrows={hall.num_of_rows} numofseats={hall.num_of_seats} vip={hall.price_vip} regular={hall.price_regular} open={hall.open}>
            <input type="radio" className="conf-step__radio"
              name={props.type === 'scheme' ? "chairs-hall" : props.type === 'price' ? "prices-hall" : "sale-hall"}
              value={hall.name} onChange={handleCatchingInfo}
              checked={props.type === 'scheme' ? hallIdForSchema === hall.id.toString() : props.type === 'price' ? hallIdForPrice === hall.id.toString() : hallIdForSale === hall.id.toString()} />
            <span className="conf-step__selector">{hall.name}</span>
          </li>)
      }</ul>
    </React.Fragment >
  )
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import { 
  hallsListFetch, 
  hallsListFailure, 
  popupAddingToggleHall, 
  popupDeletingToggle 
} from '../../actions/actionCreators';

export default function HallsManagement() {

  const { halls, error } = useSelector(state => state.serviceHallsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert('Trying to fetch halls, but something wrong with backend', error);
      dispatch(hallsListFailure(''));
      } else if (halls) {
      hallsListFetch(dispatch);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handlePopupAddingHall = () => {
    dispatch(popupAddingToggleHall(true));
  }

  const handlePopupDeletingHall = (e) => {
    dispatch(popupDeletingToggle(true, e.target.parentElement.id, e.target.parentElement.textContent));
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Управление залами" />
        <ConfigWrapper paragraph="Доступные залы:">
          <ul className="conf-step__list">{
            halls.map((hall) => 
            <li id={hall.id} key={hall.id}>{hall.name}
              <button className="conf-step__button conf-step__button-trash" onClick={handlePopupDeletingHall}></button>
            </li>)
          }</ul>
          <button className="conf-step__button conf-step__button-accent" onClick={handlePopupAddingHall}>Создать зал</button>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

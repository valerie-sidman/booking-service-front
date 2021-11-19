import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import { hallsListFetch, hallsListFailure } from '../../actions/actionCreators';

export default function HallsManagement(props) {

  const { halls, error } = useSelector(state => state.serviceHallsList);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert('Something wrong with backend', error);
      dispatch(hallsListFailure(''));
    } else if (halls.length === 0) {
      hallsListFetch(dispatch);
    }
  }, [halls, error, dispatch]);


  const handlePopupAddingHall = () => {
    navigate("/admin/authorized/adding_hall");
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Управление залами" />
        <ConfigWrapper paragraph="Доступные залы:">
          <ul className="conf-step__list">{
            halls.map((hall) => <li key={hall.id}>{hall.name}<button className="conf-step__button conf-step__button-trash"></button></li>)
          }</ul>
          <button className="conf-step__button conf-step__button-accent" onClick={handlePopupAddingHall}>Создать зал</button>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

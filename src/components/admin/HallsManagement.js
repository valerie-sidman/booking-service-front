import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';

export default function HallsManagement(props) {

  let navigate = useNavigate();

  const [halls, setHalls] = useState([]);
  const hallItems = halls
    .map((hall) => <li>{hall}<button className="conf-step__button conf-step__button-trash"></button></li>);

  const handleModify = () => {
    setHalls(prevHalls => [...prevHalls, props.hall])
  }

  const handlePopupAddingHall = () => {
    navigate("/admin/authorized/adding_hall");
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Управление залами" />
        <ConfigWrapper paragraph="Доступные залы:">
          <ul className="conf-step__list">{hallItems}</ul>
          <button className="conf-step__button conf-step__button-accent" onClick={handlePopupAddingHall}>Создать зал</button>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

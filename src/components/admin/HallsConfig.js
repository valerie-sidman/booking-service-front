import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import PopupControls from './PopupControls';
import HallsList from './HallsList';
import {
  rowsSeatsAdding,
  changeField
} from '../../actions/actionCreators';

export default function HallsConfig() {

  const dispatch = useDispatch();
  const { id, numOfRows, numOfSeats } = useSelector(state => state.serviceCatchingInfo);

  function creatingSeats() {
    let seats = [];
    for (let is = 0; is < numOfSeats; is++) {
      seats.push(<span className="conf-step__chair conf-step__chair_standart"></span>);
    }
    return seats;
  }

  function creatingSchemaHall() {
    let rows = [];
    for (let ir = 0; ir < numOfRows; ir++) {
      rows.push(<div className="conf-step__row">
        {creatingSeats()}
      </div>);
    }
    return rows;
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmitSchema= () => {
    rowsSeatsAdding(dispatch, id, numOfRows, numOfSeats);
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Конфигурация залов" />
        <ConfigWrapper paragraph="Выберите зал для конфигурации:">
          <HallsList />

          <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">Рядов, шт
              <input type="text" className="conf-step__input" name="numOfRows" value={numOfRows} onChange={handleChange} />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">Мест, шт
              <input type="text" className="conf-step__input" name="numOfSeats" value={numOfSeats} onChange={handleChange} />
            </label>
          </div>

          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
            <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
            <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>

          <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
              {creatingSchemaHall()}
            </div>
          </div>
          <PopupControls title="Сохранить" action={() => handleSubmitSchema()}/>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

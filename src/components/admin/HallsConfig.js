import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import ChangeControls from './ChangeControls';
import HallsList from './HallsList';
import {
  rowsSeatsAdding,
  catchingInfoByClickingOnHall,
  seatsAdding,
  changeField
} from '../../actions/actionCreators';

export default function HallsConfig() {

  const dispatch = useDispatch();
  const { id, numOfRows, numOfSeats } = useSelector(state => state.serviceCatchingInfo);
  const { seats } = useSelector(state => state.serviceSeatsList);

  function creatingSeats(row) {
    let seats = [];
    for (let is = 0; is < numOfSeats; is++) {
      const seat = seats.find((seat) => seat.number === is + 1 && seat.row === row);
      seats.push(<span key={is} className="conf-step__chair conf-step__chair_standart"></span>);
    }
    return seats;
  }

  function creatingSchemaHall() {
    let rows = [];
    for (let ir = 0; ir < numOfRows; ir++) {
      rows.push(<div key={ir} className="conf-step__row">
        {creatingSeats(ir + 1)}
      </div>);
    }
    return rows;
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmitSchema = () => {
    rowsSeatsAdding(dispatch, id, numOfRows, numOfSeats);
  }

  const handleCancelSchema = () => {
    dispatch(catchingInfoByClickingOnHall('', '', '', ''));
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
              <input type="text" className="conf-step__input" placeholder="0" name="numOfRows" value={numOfRows} onChange={handleChange} />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">Мест, шт
              <input type="text" className="conf-step__input" placeholder="0" name="numOfSeats" value={numOfSeats} onChange={handleChange} />
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
          <ChangeControls actionSubmit={() => handleSubmitSchema()} actionCancel={() => handleCancelSchema()}/>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

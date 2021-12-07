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
  seatsListUpdate,
  seatsAdding,
  changeField
} from '../../actions/actionCreators';

export default function HallsConfig() {

  const dispatch = useDispatch();
  const { id, numOfRows, numOfSeats } = useSelector(state => state.serviceCatchingInfo).halls;
  const { seats } = useSelector(state => state.serviceSeatsList);

  function handleChangeSeatType(evt) {

    evt.preventDefault();

    const clickedNumber = evt.target.getAttribute('number');
    const clickedRow = evt.target.getAttribute('row');

    const seatForChangeType = seats.find((seat) => seat.number === clickedNumber && (seat.row === clickedRow));

    if (seatForChangeType.type === 'regular') {
      seatForChangeType.type = 'vip';
    } else if (seatForChangeType.type === 'vip') {
      seatForChangeType.type = 'disabled';
    } else {
      seatForChangeType.type = 'regular';
    }

    dispatch(seatsListUpdate(seats));

  }

  function creatingSeats(row) {
    let seatElements = [];
    for (let is = 0; is < numOfSeats; is++) {
      let seat = seats.find((seat) => seat.number === (is + 1).toString() && seat.row === row.toString());

      let seatTypeClassName = 'conf-step__chair conf-step__chair_standart';

      if (!seat) {
        seat = {
          number: (is + 1).toString(),
          row: row.toString(),
          type: 'regular',
          hall_id: id,
        }

        seats.push(seat);
      }

      if (seat && seat.type === 'vip') {
        seatTypeClassName = 'conf-step__chair conf-step__chair_vip';
      }

      if (seat && seat.type === 'disabled') {
        seatTypeClassName = 'conf-step__chair conf-step__chair_disabled';
      }

      seatElements.push(<span key={is} number={is + 1} row={row} className={seatTypeClassName} onClick={handleChangeSeatType}></span>);
    }

    return seatElements;
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
    seats.splice(0, seats.length);
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmitSchema = () => {
    rowsSeatsAdding(dispatch, id, numOfRows, numOfSeats);
    seatsAdding(dispatch, id, seats);
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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderClient from './HeaderClient';
import {
  seatsListFetch,
  bookingSeats
} from '../../actions/actionCreators';

export default function BookingSection() {

  const { movieName, hallId, hallName, hallVipPrice, hallRegularPrice, hours, minutes } = useSelector(state => state.serviceBookingInfoReducer);
  const { seats } = useSelector(state => state.serviceSeatsList);
  const { selectedDate } = useSelector(state => state.serviceCalendarReducer);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    seatsListFetch(dispatch, hallId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createSchemaStruct() {
    let rows = [];
    seats.forEach((rawSeat) => {
      if (rows.some((row) => row.number === rawSeat.row)) {
        let rowIndex = rows.findIndex((row) => row.number === rawSeat.row);
        rows[rowIndex].seats.push({ id: rawSeat.id, number: rawSeat.number, row: rawSeat.row, type: rawSeat.type, ticketId: rawSeat.ticket_id });
      } else {
        rows.push({ number: rawSeat.row, seats: [{ id: rawSeat.id, number: rawSeat.number, row: rawSeat.row, type: rawSeat.type, ticketId: rawSeat.ticket_id }] });
      }
    })
    return rows;
  }

  function getSeatClassByType(type, ticketId) {
    if (ticketId) {
      return 'buying-scheme__chair buying-scheme__chair_taken';
    }
    switch (type) {
      case 'vip':
        return 'buying-scheme__chair buying-scheme__chair_vip';
      case 'disabled':
        return 'buying-scheme__chair buying-scheme__chair_disabled';
      default:
        return 'buying-scheme__chair buying-scheme__chair_standart';
    }
  }

  function selectSeat(ev) {
    if (ev.target.className !== 'buying-scheme__chair buying-scheme__chair_selected') {
      ev.target.className = 'buying-scheme__chair buying-scheme__chair_selected';
    } else {
      ev.target.className = getSeatClassByType(ev.target.getAttribute('type'), ev.target.getAttribute('ticketid'));
    }
  }

  function sendingBookedSeats() {
    const elements = Array.from(document.getElementsByClassName('buying-scheme__chair buying-scheme__chair_selected'))
      .filter((seat) => seat.id)
      .map(element => {
        return {
          id: element.getAttribute('id'),
          number: element.getAttribute('number'),
          row: element.getAttribute('row'),
          type: element.getAttribute('type')
        }
      });
    dispatch(bookingSeats(elements));
    navigate("/client/payment");
  }

  return (
    <React.Fragment>
      <HeaderClient />
      <main>
        <section className="buying">
          <div className="buying__info">
            <div className="buying__info-description">
              <h2 className="buying__info-title">{movieName}</h2>
              <p className="buying__info-start">?????????? ???????????? ????????????: {hours}:{minutes}</p>
              <p className="buying__info-start">???????? ????????????: {selectedDate}</p>
              <p className="buying__info-hall">{hallName}</p>
            </div>
          </div>

          <div className="buying-scheme">
            <div className="buying-scheme__wrapper">

              {
                createSchemaStruct().map((row) =>
                  <div key={row.number} className="buying-scheme__row">
                    {
                      row.seats.map((seat) =>
                        <span key={seat.number} id={seat.id}
                          number={seat.number}
                          row={seat.row}
                          type={seat.type}
                          ticketid={seat.ticketId}
                          className={getSeatClassByType(seat.type, seat.ticketId)}
                          onClick={selectSeat}>
                        </span>
                      )
                    }
                  </div>
                )
              }

            </div>

            <div className="buying-scheme__legend">
              <div className="col">
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                  &nbsp;&nbsp;???????????????? (<span className="buying-scheme__legend-value">{hallRegularPrice}</span> ??????)
                </p>
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                  &nbsp;&nbsp;???????????????? VIP (<span className="buying-scheme__legend-value">{hallVipPrice}</span> ??????)
                </p>
              </div>
              <div className="col">
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                  &nbsp;&nbsp;????????????
                </p>
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_selected"></span>
                  &nbsp;&nbsp;??????????????
                </p>
              </div>
            </div>
          </div>

          <button className="acceptin-button" onClick={sendingBookedSeats}>??????????????????????????</button>
        </section>
      </main>
    </React.Fragment >
  )
}

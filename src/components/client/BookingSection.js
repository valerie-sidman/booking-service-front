import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderClient from './HeaderClient';
import {
  seatsListFetch,
} from '../../actions/actionCreators';

export default function BookingSection() {

  const { movieName, hallId, hallName, hours, minutes } = useSelector(state => state.serviceBookingInfoReducer);
  const { seats } = useSelector(state => state.serviceSeatsList);
  const dispatch = useDispatch();

  useEffect(() => {
    seatsListFetch(dispatch, hallId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createSchemaStruct() {
    console.log(seats);
    let rows = [];
    rows = seats.map(())
    seats.reduce(
      (schema, { id, number, type }) => {
        if (schema) {
          console.log(schema)
          if (!schema['rows']) {
            schema['rows'] = [];
          }
          schema['rows'].push({ id, number, type });
        }

      }
    )
    console.log('result: ', seats)
  }

  return (
    <React.Fragment>
      <HeaderClient />
      {
        createSchemaStruct()
      }

      <main>
        <section className="buying">
          <div className="buying__info">
            <div className="buying__info-description">
              <h2 className="buying__info-title">{movieName}</h2>
              <p className="buying__info-start">Начало сеанса: {hours}:{minutes}</p>
              <p className="buying__info-hall">{hallName}</p>
            </div>
          </div>


          <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
              <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                  className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                  className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                  className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                  className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                  className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                  className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              </div>

            </div>

            <div className="buying-scheme__legend">
              <div className="col">
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                  Свободно (<span className="buying-scheme__legend-value">250</span>руб)
                </p>
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                  Свободно VIP (<span className="buying-scheme__legend-value">350</span>руб)
                </p>
              </div>
              <div className="col">
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                  Занято
                </p>
                <p className="buying-scheme__legend-price">
                  <span className="buying-scheme__chair buying-scheme__chair_selected"></span>
                  Выбрано
                </p>
              </div>
            </div>
          </div>

          <button className="acceptin-button" onclick="location.href='payment.html'">Забронировать</button>
        </section>
      </main>
    </React.Fragment >
  )
}

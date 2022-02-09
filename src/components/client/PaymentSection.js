import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderClient from './HeaderClient';
import {
  bookingSeats
} from '../../actions/actionCreators';

export default function PaymentSection() {

  let navigate = useNavigate();

  const { movieName, hallName, hallVipPrice, hallRegularPrice, hours, minutes, seats } = useSelector(state => state.serviceBookingInfoReducer);

  function getSum() {
    const sum = seats.map(seat => seat.type === 'vip' ? hallVipPrice : hallRegularPrice).reduce((pv, cv) => Number.parseInt(pv) + Number.parseInt(cv));
    return sum;
  }

  function getBookingCode() {
    
  }

  return (
    <React.Fragment>
      <HeaderClient />
      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм:
              <span className="ticket__details ticket__title">&nbsp;&nbsp;{movieName}</span>
            </p>
            <p className="ticket__info">Места:
              <span className="ticket__details ticket__chairs">&nbsp;&nbsp;{seats.map(seat => seat.number).join(", ")}</span>
            </p>
            <p className="ticket__info">В зале:
              <span className="ticket__details ticket__hall">&nbsp;&nbsp;{hallName}</span>
            </p>
            <p className="ticket__info">Начало сеанса:
              <span className="ticket__details ticket__start">&nbsp;&nbsp;{hours}:{minutes}</span>
            </p>
            <p className="ticket__info">Стоимость:
              <span className="ticket__details ticket__cost">&nbsp;&nbsp;{getSum()}</span> рублей
            </p>

            <button className="acceptin-button" onClick={getBookingCode}>Получить код бронирования</button>

            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

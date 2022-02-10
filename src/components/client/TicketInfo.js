import React from 'react';
import { useSelector } from 'react-redux';

export default function TicketInfo(props) {

  const { movieName, hallName, hallVipPrice, hallRegularPrice, hours, minutes, seats } = useSelector(state => state.serviceBookingInfoReducer);
  const { selectedDate } = useSelector(state => state.serviceCalendarReducer);

  function getSum() {
    const sum = seats.map(seat => seat.type === 'vip' ? hallVipPrice : hallRegularPrice).reduce((pv, cv) => Number.parseInt(pv) + Number.parseInt(cv));
    return sum;
  }

  return (
    <React.Fragment>
      <header className="tichet__check">
        <h2 className="ticket__check-title">{props.title}</h2>
      </header>

      <div className="ticket__info-wrapper">
        <p className="ticket__info">На фильм:
          <span className="ticket__details ticket__title">&nbsp;&nbsp;{movieName}</span>
        </p>
        <p className="ticket__info">Места:
          <span className="ticket__details ticket__chairs">&nbsp;&nbsp;{seats.map(seat => 'Место: ' + seat.number + ' ряд: ' + seat.row).join("; ")}</span>
        </p>
        <p className="ticket__info">В зале:
          <span className="ticket__details ticket__hall">&nbsp;&nbsp;{hallName}</span>
        </p>
        <p className="ticket__info">Время начала сеанса:
          <span className="ticket__details ticket__start">&nbsp;&nbsp;{hours}:{minutes}</span>
        </p>
        <p className="ticket__info">Дата сеанса:
          <span className="ticket__details ticket__start">&nbsp;&nbsp;{selectedDate}</span>
        </p>
        <p className="ticket__info">Стоимость:
          <span className="ticket__details ticket__cost">&nbsp;&nbsp;{getSum()}</span> рублей
        </p>
        {props.children}
      </div>
    </React.Fragment>
  )
}

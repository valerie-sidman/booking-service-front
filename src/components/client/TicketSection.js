import React from 'react';
import { useSelector } from 'react-redux';
import HeaderClient from './HeaderClient';
import TicketInfo from './TicketInfo';

export default function TicketSection() {

  const { qr } = useSelector(state => state.serviceBookingInfoReducer);

  return (
    <React.Fragment>
      <HeaderClient />
      <main>
        <section className="ticket">
          <TicketInfo title="Электронный билет">
            <img className="ticket__info-qr" src={qr} alt="QR-код билета" />
            <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </TicketInfo>
        </section>
      </main>
    </React.Fragment>
  )
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderClient from './HeaderClient';
import TicketInfo from './TicketInfo';
import { creatingTicket } from '../../actions/actionCreators';

export default function PaymentSection() {

  const { sessionId, seats } = useSelector(state => state.serviceBookingInfoReducer);
  const { selectedDate } = useSelector(state => state.serviceCalendarReducer);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function getBookingCode(e) {
    e.preventDefault();
    creatingTicket(dispatch, sessionId, selectedDate, seats);
    navigate("/client/ticket");
  }

  return (
    <React.Fragment>
      <HeaderClient />
      <main>
        <section className="ticket">
          <TicketInfo title="Вы выбрали билеты:">
            <button className="acceptin-button" onClick={getBookingCode}>Получить код бронирования</button>
            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
            </TicketInfo>
        </section>
      </main>
    </React.Fragment>
  )
}

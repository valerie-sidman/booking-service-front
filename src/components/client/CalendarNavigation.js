import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calendarManagement, selectDay } from '../../actions/actionCreators';

export default function CalendarNavigation() {

  const dispatch = useDispatch();
  const { week, selectedDay } = useSelector(state => state.serviceCalendarReducer);
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const today = new Date();

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  useEffect(() => {
    dispatch(calendarManagement( [
      { dayNumber: today.getDate(), dayName: days[today.getDay()] },
      { dayNumber: addDays(today, 1).getDate(), dayName: days[addDays(today, 1).getDay()] },
      { dayNumber: addDays(today, 2).getDate(), dayName: days[addDays(today, 2).getDay()] },
      { dayNumber: addDays(today, 3).getDate(), dayName: days[addDays(today, 3).getDay()] },
      { dayNumber: addDays(today, 4).getDate(), dayName: days[addDays(today, 4).getDay()] },
      { dayNumber: addDays(today, 5).getDate(), dayName: days[addDays(today, 5).getDay()] },
      { dayNumber: addDays(today, 6).getDate(), dayName: days[addDays(today, 6).getDay()] }
    ] ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getNavDayClassName(day) {
    let className = 'page-nav__day';

    if (day.dayNumber === today.getDate()) {
      className += ' page-nav__day_today';
    } 

    if (day.dayName === days[6] || day.dayName === days[0]) {
      className += ' page-nav__day_weekend';
    }

    if (day.dayNumber.toString() === selectedDay) {
      className += ' page-nav__day_chosen';
    }

    return className;
  }

  function toggleSelect(e) {
    e.preventDefault();
    dispatch(selectDay(e.target.getAttribute('daynumber')))
  }

  return (
    <React.Fragment>
      <nav className="page-nav">
      {week.map((day) => 
        <a key={week.indexOf(day)} className={getNavDayClassName(day)} href="/#" daynumber={day.dayNumber} onClick={toggleSelect}>
          <span className="page-nav__day-week" daynumber={day.dayNumber}>{day.dayName}</span>
          <span className="page-nav__day-number" daynumber={day.dayNumber}>{day.dayNumber}</span>
        </a>
      )}
      </nav>
    </React.Fragment>
  )
}

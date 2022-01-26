import React from 'react';

export default function CalendarNavigation() {
  return (
    <React.Fragment>
      <nav className="page-nav">
        <a className="page-nav__day page-nav__day_today" href="/#">
          <span className="page-nav__day-week">Пн</span><span className="page-nav__day-number">31</span>
        </a>
        <a className="page-nav__day" href="/#">
          <span className="page-nav__day-week">Вт</span><span className="page-nav__day-number">1</span>
        </a>
        <a className="page-nav__day page-nav__day_chosen" href="/#">
          <span className="page-nav__day-week">Ср</span><span className="page-nav__day-number">2</span>
        </a>
        <a className="page-nav__day" href="/#">
          <span className="page-nav__day-week">Чт</span><span className="page-nav__day-number">3</span>
        </a>
        <a className="page-nav__day" href="/#">
          <span className="page-nav__day-week">Пт</span><span className="page-nav__day-number">4</span>
        </a>
        <a className="page-nav__day page-nav__day_weekend" href="/#">
          <span className="page-nav__day-week">Сб</span><span className="page-nav__day-number">5</span>
        </a>
        <a className="page-nav__day page-nav__day_next" href="/#">
        </a>
      </nav>
    </React.Fragment>
  )
}

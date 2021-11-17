import React from 'react';
import PopupAdding from './PopupAdding';
import PopupControls from './PopupControls';

export default function AddHall() {
  return (
    <React.Fragment>
      <PopupAdding title="Добавление зала">
        <form action="add_hall" method="post" acceptCharset="utf-8">
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название зала
            <input className="conf-step__inputв" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" required />
          </label>
          <PopupControls title="Добавить зал" />
        </form>
      </PopupAdding>
    </React.Fragment>
  )
}

import React from 'react';
import closeImg from '../../i/close.png';

export default function PopupAdding(props) {
  return (
    <div className="popup active">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              {props.title}
              <a className="popup__dismiss" href="/admin/authorized"><img src={closeImg} alt="Закрыть" /></a>
            </h2>
          </div>
          <div className="popup__wrapper">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

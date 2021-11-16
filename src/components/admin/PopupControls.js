import React from 'react';

export default function PopupControls(props) {
  return (
    <div className="conf-step__buttons text-center">
      <input type="submit" value={props.title} className="conf-step__button conf-step__button-accent" />
      <button className="conf-step__button conf-step__button-regular">Отменить</button>
    </div>
  )}

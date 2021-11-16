import React from 'react';

export default function ChangeControls() {
  return (
    <fieldset className="conf-step__buttons text-center">
      <button className="conf-step__button conf-step__button-regular">Отмена</button>
      <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
    </fieldset>
  )
}

import React from 'react';

export default function ChangeControls(props) {
  return (
    <React.Fragment>
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={props.actionCancel}>Отмена</button>
        <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={props.actionSubmit} />
      </fieldset>
    </React.Fragment>
  )
}

import React from 'react';

export default function ConfigWrapper(props) {
  return (
    <div className="conf-step__wrapper">
      <p className="conf-step__paragraph">{props.paragraph}</p>
      {props.children}
    </div>
  )
}

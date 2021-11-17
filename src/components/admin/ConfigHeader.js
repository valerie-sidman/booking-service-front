import React from 'react';

export default function ConfigHeader(props) {
  return (
    <React.Fragment>
      <header className="conf-step__header conf-step__header_opened">
        <h2 className="conf-step__title">{props.title}</h2>
      </header>
    </React.Fragment>
  )
}

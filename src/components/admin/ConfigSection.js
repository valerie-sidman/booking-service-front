import React from 'react';

export default function ConfigSection(props) {
  return (
    <React.Fragment>
      <section className="conf-step">{props.children}</section>
    </React.Fragment>
  )
}

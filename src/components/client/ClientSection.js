import React from 'react';
import HeaderClient from './HeaderClient';
import CalendarNavigation from './CalendarNavigation';
import MainClient from './MainClient';

export default function ClientSection() {
  return (
    <React.Fragment>
      <HeaderClient />
      <CalendarNavigation />
      <MainClient />
    </React.Fragment>
  )
}

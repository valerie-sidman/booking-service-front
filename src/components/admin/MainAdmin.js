import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import HallsManagement from './HallsManagement';

export default function MainAdmin() {
  return (
    <>
      <HeaderAdmin />
      <main className="conf-steps">
        <HallsManagement />
      </main>
    </>
  )
}

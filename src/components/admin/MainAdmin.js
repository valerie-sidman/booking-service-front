import React from 'react';
import { Navigate  } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import HallsManagement from './HallsManagement';

export default function MainAdmin() {

  const auth = JSON.parse(localStorage.getItem('auth'));
  
  return (
    <React.Fragment>
      <HeaderAdmin />
      {auth ?
        <main className="conf-steps">
          <HallsManagement />
        </main>
      : <Navigate to={"/admin"} />}
    </React.Fragment>
  )
}

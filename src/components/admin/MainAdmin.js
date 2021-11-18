import React from 'react';
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderAdmin from './HeaderAdmin';
import HallsManagement from './HallsManagement';

export default function MainAdmin() {

  const { result } = useSelector(state => state.serviceAuthorization);
  
  return (
    <React.Fragment>
      <HeaderAdmin />
      {result.result === 'Ok' ?
        <main className="conf-steps">
          <HallsManagement />
        </main>
      : <Navigate to={"/admin"} />}
    </React.Fragment>
  )
}

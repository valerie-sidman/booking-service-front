import React from 'react';
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderAdmin from './HeaderAdmin';
import HallsManagement from './HallsManagement';
import HallsConfig from './HallsConfig';
import PriceConfig from './PriceConfig';
import SessionGrid from './SessionGrid';
import AddHall from './AddHall';
import DeleteHall from './DeleteHall';
import AddMovie from './AddMovie';

export default function MainAdmin() {

  const { result } = useSelector(state => state.serviceAuthorization);
  const { addingStatus, deletingStatus, delId, delName} = useSelector(state => state.servicePopupToggle);
  
  return (
    <React.Fragment>
      <AddHall active={addingStatus}/>
      <DeleteHall id={delId} name={delName} active={deletingStatus}/>
      <AddMovie active={addingStatus}/>
      <HeaderAdmin />
      {result.result === 'Ok' ?
        <main className="conf-steps">
          <HallsManagement />
          <HallsConfig />
          <PriceConfig />
          <SessionGrid />
        </main>
      : <Navigate to={"/admin"} />}
    </React.Fragment>
  )
}

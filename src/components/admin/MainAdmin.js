import React from 'react';
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderAdmin from './HeaderAdmin';
import HallsManagement from './HallsManagement';
import HallsConfig from './HallsConfig';
import PriceConfig from './PriceConfig';
import SessionGrid from './SessionGrid';
import SaleConfig from './SaleConfig';
import AddHall from './AddHall';
import DeleteHall from './DeleteHall';
import AddMovie from './AddMovie';
import AddSession from './AddSession';
import DeleteSession from './DeleteSession';

export default function MainAdmin() {

  const { result } = useSelector(state => state.serviceAuthorization);
  const { 
    addingStatusHall, 
    deletingStatus, 
    addingStatusMovie, 
    addingStatusSession, 
    deletingStatusSession, 
    delId, 
    delName,
  } = useSelector(state => state.servicePopupToggle);
  
  return (
    <React.Fragment>
      <AddHall active={addingStatusHall}/>
      <DeleteHall id={delId} name={delName} active={deletingStatus}/>
      <AddMovie active={addingStatusMovie}/>
      <AddSession active={addingStatusSession}/>
      <DeleteSession active={deletingStatusSession}/>
      <HeaderAdmin />
      {result.result === 'Ok' ?
        <main className="conf-steps">
          <HallsManagement />
          <HallsConfig />
          <PriceConfig />
          <SessionGrid />
          <SaleConfig />
        </main>
      : <Navigate to={"/admin"} />}
    </React.Fragment>
  )
}

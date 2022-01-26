import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import HallsList from './HallsList';
import { changeSaleStatus, hallsListFetch } from '../../actions/actionCreators';

export default function SaleConfig() {

  const { sale } = useSelector(state => state.serviceCatchingInfo);
  const dispatch = useDispatch();

  function manageSaleStatus() {
    console.log(sale.hallIdForSale, sale.open === '0')
    changeSaleStatus(dispatch, sale.hallIdForSale, sale.open === '0');
    hallsListFetch(dispatch);
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Открыть продажи" />
        <ConfigWrapper>
          <HallsList type="sale"/>
          <button className="conf-step__button conf-step__button-accent" isopen={sale.open} onClick={manageSaleStatus}>
            {sale.open === '1' ? 'Закрыть продажу билетов' : sale.open === '0' ? 'Открыть продажу билетов' : 'Выберите зал'}
          </button>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import HallsList from './HallsList';
import {
  hallsListFetch,
  catchingInfoSale,
  changeSaleStatus,
} from '../../actions/actionCreators';

export default function SaleConfig() {

  const { sale } = useSelector(state => state.serviceCatchingInfo).sale;
  const dispatch = useDispatch();

  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function manageSaleStatus() {
    dispatch(changeSaleStatus(sale.id, sale.open));
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Открыть продажи" />
        <ConfigWrapper paragraph="Всё готово, теперь можно:">
          <HallsList type="sale"/>
          <button className="conf-step__button conf-step__button-accent" onClick={manageSaleStatus}>{}</button>
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

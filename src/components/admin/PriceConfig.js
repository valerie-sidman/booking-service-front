import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import HallsList from './HallsList';
import ChangeControls from './ChangeControls';
import {
  hallsListFetch,
  priceAdding,
  catchingInfoPrice,
  changeFieldPrice
} from '../../actions/actionCreators';

export default function PriceConfig() {

  const dispatch = useDispatch();
  const { hallIdForPrice, vip, regular } = useSelector(state => state.serviceCatchingInfo).price;

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeFieldPrice(name, value));
  }

  const handleSubmitPrice = () => {
    priceAdding(dispatch, hallIdForPrice, vip, regular);
    hallsListFetch(dispatch);
  }

  const handleCancelPrice = () => {
    dispatch(catchingInfoPrice('', '', ''));
  }

  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Конфигурация цен" />
        <ConfigWrapper paragraph="Выберите зал для конфигурации:">
          <HallsList type='price' />

          <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">Цена, рублей
              <input type="text" className="conf-step__input" placeholder="0" name="regular" value={regular} onChange={handleChange}/>
            </label> за
            <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
          </div>
          <div className="conf-step__legend">
            <label className="conf-step__label">Цена, рублей
              <input type="text" className="conf-step__input" placeholder="0" name="vip" value={vip} onChange={handleChange} />
            </label> за 
            <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
          </div>

          <ChangeControls actionSubmit={() => handleSubmitPrice()} actionCancel={() => handleCancelPrice()} />
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

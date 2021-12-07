import React from 'react';
import ConfigSection from './ConfigSection';
import ConfigHeader from './ConfigHeader';
import ConfigWrapper from './ConfigWrapper';
import HallsList from './HallsList';
import ChangeControls from './ChangeControls';

export default function PriceConfig() {
  return (
    <React.Fragment>
      <ConfigSection>
        <ConfigHeader title="Конфигурация цен" />
        <ConfigWrapper paragraph="Выберите зал для конфигурации:">
          <HallsList />

          <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">Цена, рублей
              <input type="text" className="conf-step__input" placeholder="0" />
            </label> за
            <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
          </div>
          <div className="conf-step__legend">
            <label className="conf-step__label">Цена, рублей
              <input type="text" className="conf-step__input" placeholder="0" value="350" />
            </label> за 
            <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
          </div>

          <ChangeControls />
        </ConfigWrapper>
      </ConfigSection>
    </React.Fragment>
  )
}

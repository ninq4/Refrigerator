import { observer } from 'mobx-react-lite';
import style from './hosting-section.module.scss';
import { Switcher } from './switcher/switcher';
import { RenderHosts } from '../../randerCards/RenderHosts';
import TabsBtns from './tabsBtns/tabsBtns';
import { useState } from 'react';
import { HostsTabs } from './HostsTabs/HostsTabs';

export const HostingSection = () => {




  return (
    <section className={`main__comments_section ${style.hostings_section}`}>
      <div className={style.hostings_section__container}>
        <div className={style.hostings_section__inner}>
        <HostsTabs />
        </div>
      </div>
    </section>
  );
};

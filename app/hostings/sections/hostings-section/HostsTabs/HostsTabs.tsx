'use client';
import { RenderHosts } from '@/app/hostings/randerCards/RenderHosts';
import style from '../hosting.module.scss';
import { Switcher } from '../switcher/switcher';
import TabsBtns from '../tabsBtns/tabsBtns';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import HostsStore from '@/app/store/fetchHosts';
import useSwitcher from '@/app/store/switchStore';

export const HostsTabs = observer(() => {
  const { fetchHostMonths, categoryMonth, fetchHostYear, categoryYear } = HostsStore;

  useEffect(() => {
    if (useSwitcher.switch == false) {
      fetchHostMonths();
    } else {
      fetchHostYear();
    }
  }, []);
  //   console.log(setCategoryId);

  return (
    <>
      <header className={style.section__tabs_header}>
        <TabsBtns />
        <Switcher />
      </header>
      <ul className={style.section__tabs}>
        {useSwitcher.switch
          ? categoryYear.map((item, pos) => (
              <RenderHosts
                key={pos}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                oldprice={item.oldprice}
                dercrs={item.descrs}
              />
            ))
          : categoryMonth.map((item, pos) => (
              <RenderHosts
                key={pos}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                dercrs={item.descrs}
              />
            ))}
      </ul>
    </>
  );
});

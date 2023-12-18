'use client';
import { RenderHosts } from '@/app/hostings/randerCards/RenderHosts';
import style from '../hosting-section.module.scss';
import { Switcher } from '../switcher/switcher';
import TabsBtns from '../tabsBtns/tabsBtns';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import HostsStore from '@/app/store/fetchHosts';

export const HostsTabs = observer(() => {
  const { fetchHost, category } = HostsStore;
  useEffect(() => {
    fetchHost();
  }, []);
  //   console.log(setCategoryId);

  return (
    <>
      <header className={style.hostings_section__tabs_header}>
        <TabsBtns />
        <Switcher />
      </header>
      <ul className={style.hostings_section__tabs}>
        {category.map((item, pos) => (
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

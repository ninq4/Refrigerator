'use client';
import style from '..//hosting.module.scss';
import { observer } from 'mobx-react-lite';
import useSwitcher from '@/app/store/switchStore';
import HostsStore from '@/app/store/fetchHosts';

export const Switcher = observer(() => {
  const { categoryId, fetchHostMonths, fetchHostYear } = HostsStore;
  if(useSwitcher.switch === false){
    fetchHostMonths();
  } else{
    fetchHostYear();
  }
  return (
    <div className={style.section__tabs_switcherWrapper}>
      <span
        className={`${style.section__switcherText} ${useSwitcher.switch ? '' : `${style.active}`}`}>
        за месяц
      </span>
      <label
        onClick={() => useSwitcher.isSwitched()}
        htmlFor=""
        className={style.section__tabs_checkbox}>
        <span className={style.section__tabs_switch}>
          <span
            className={style.section__tabs_circle}
            style={{
              transform: useSwitcher.switch ? 'translateX(32px)' : 'translateX(4px)',
            }}></span>
        </span>
        <input
          onChange={useSwitcher.isSwitched}
          className={style.section__tabs_checkboxInput}
          checked={useSwitcher.switch}
          type="checkbox"
        />
      </label>
      <span
        className={`${style.section__switcherText} ${useSwitcher.switch ? `${style.active}` : ''}`}>
        за год
      </span>
    </div>
  );
});

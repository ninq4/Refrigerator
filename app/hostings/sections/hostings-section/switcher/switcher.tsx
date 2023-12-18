'use client';
import style from '../hosting-section.module.scss';
import { observer } from 'mobx-react-lite';
import useSwitcher from '@/app/store/switchStore';

export const Switcher = observer(() => {
  return (
    <div className={style.hostings_section__tabs_switcherWrapper}>
      <span
        className={`${style.hostings_section__switcherText} ${useSwitcher.switch ? '' : `${style.active}`}`}>
        за месяц
      </span>
      <label
        onClick={() => useSwitcher.isSwitched()}
        htmlFor=""
        className={style.hostings_section__tabs_checkbox}>
        <span className={style.hostings_section__tabs_switch}>
          <span
            className={style.hostings_section__tabs_circle}
            style={{
              transform: useSwitcher.switch ? 'translateX(32px)' : 'translateX(4px)',
            }}></span>
        </span>
        <input
          onChange={useSwitcher.isSwitched}
          className={style.hostings_section__tabs_checkboxInput}
          checked={useSwitcher.switch}
          type="checkbox"
        />
      </label>
      <span
        className={`${style.hostings_section__switcherText} ${useSwitcher.switch ? `${style.active}` : ''}`}>
        за год
      </span>
    </div>
  );
});

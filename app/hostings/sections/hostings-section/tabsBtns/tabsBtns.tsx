'use client';
import { observer } from 'mobx-react-lite';
import style from '../hosting-section.module.scss';
import HostsStore from '@/app/store/fetchHosts';
const TabsBtns = observer(() => {
  const btnsList = ['Виртуальный хостинг', 'Хостинг для CMS', 'Хостинг для 1C-Битрикс'];
  const { categoryId, fetchHost } = HostsStore;
  const setCategoryId = (id: number): void => {
    HostsStore.categoryId = id;
    fetchHost();
  };
  return (
    <div className={style.hostings_section__tabs_btns}>
      {btnsList.map((btn, pos: number) => {
        categoryId === pos;

        return (
          <button
            onClick={() => setCategoryId(pos)}
            className={`${style.hostings_section__tabs_btn} ${categoryId === pos ? `${style.active}` : ''}`}
            key={pos}>
            {btn}
          </button>
        );
      })}
    </div>
  );
});
export default TabsBtns;
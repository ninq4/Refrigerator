'use client';
import { observer } from 'mobx-react-lite';
import style from '../hosting.module.scss';
import HostsStore from '@/app/store/fetchHosts';
import useSwitcher from '@/app/store/switchStore';
const TabsBtns = observer(() => {
  const btnsList = ['Виртуальный хостинг', 'Хостинг для CMS', 'Хостинг для 1C-Битрикс'];
  const { categoryId, fetchHostMonths, fetchHostYear } = HostsStore;
  const setCategoryId = (id: number): void => {
    HostsStore.categoryId = id;
    if (useSwitcher.switch == false) {
      fetchHostMonths();
      console.log(useSwitcher.switch);
      console.log(fetchHostMonths)
    } else {
      fetchHostYear();
      console.log(useSwitcher.switch);
      console.log(fetchHostYear)
    }
    console.log(useSwitcher.switch);
  };
  return (
    <div className={style.section__tabs_btns}>
      {btnsList.map((btn, pos: number) => {
        categoryId === pos;

        return (
          <button
            onClick={() => setCategoryId(pos)}
            className={`${style.section__tabs_btn} ${
              categoryId === pos ? `${style.active}` : ''
            }`}
            key={pos}>
            {btn}
          </button>
        );
      })}
    </div>
  );
});
export default TabsBtns;

'use client';
import { observer } from 'mobx-react-lite';
import style from '../technology.module.scss';

const TabsBtns = ({
  category,
  setCategoryId,
}: {
  category: number;
  setCategoryId: (id: number) => void;
}) => {
  const btnsList = ['CMS', 'Фреймворки', 'Технологии'];

  return (
    <div className={style.section__tabs_btns}>
      {btnsList.map((btn, pos: number) => {
        category === pos;
        return (
          <button
            onClick={() => setCategoryId(pos)}
            className={`${style.section__tabs_btn} ${
              category === pos ? `${style.active}` : ''
            } `}
            key={pos}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default TabsBtns;

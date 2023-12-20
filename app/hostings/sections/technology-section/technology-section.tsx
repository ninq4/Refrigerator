import style from './technology.module.scss';
import Image from 'next/image';
import { TabsList } from './tabsList/tabsList';
export const TechnologySection = () => {
  return (
    <section className={`main__technology_section ${style.section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <h3 className={style.section__title}>Доступные технологии</h3>
          <TabsList />
        </div>
      </div>
    </section>
  );
};

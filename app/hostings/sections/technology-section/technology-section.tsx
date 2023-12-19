import style from './technology-section.module.scss';
import Image from 'next/image';
import { TabsList } from './tabsList/tabsList';
export const TechnologySection = () => {
  return (
    <section className={`main__technology_section ${style.technology_section}`}>
      <div className={style.technology_section__container}>
        <div className={style.technology_section__inner}>
          <h3 className={style.technology_section__title}>Доступные технологии</h3>
          <TabsList />
        </div>
      </div>
    </section>
  );
};

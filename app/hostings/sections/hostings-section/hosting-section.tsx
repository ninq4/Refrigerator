'use client';
import style from './hosting-section.module.scss';
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

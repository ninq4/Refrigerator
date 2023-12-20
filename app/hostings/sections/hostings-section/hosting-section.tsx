'use client';
import style from './hosting.module.scss';
import { HostsTabs } from './HostsTabs/HostsTabs';

export const HostingSection = () => {
  return (
    <section className={`main__comments_section ${style.section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <HostsTabs />
        </div>
      </div>
    </section>
  );
};

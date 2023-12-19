// 'use client'

import SplineCanvas from '../canvas/SplineCanvas';
import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <div className={style.hero_section__left}>
          <h1 className={style.hero_section__title}>Fucking. Refrigerator</h1>
          <p className={style.hero_section__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={style.hero_section__btn}>Попробовать</div>
          </div>
          <div className={style.hero_section__right}>
            <SplineCanvas/>
          </div>
        </div>
      </div>
    </section>
  );
}

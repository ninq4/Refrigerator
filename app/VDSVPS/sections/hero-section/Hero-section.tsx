import { Canvas } from '@/app/components/canvas/canvas';
import style from './hero.module.scss';

export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <h1 className={style.hero_section__title}>Аренда VDS и VPS</h1>
          <p className={style.hero_section__description}>
            Масштабируемые виртуальные серверы с почасовым биллингом
          </p>
          <div className={style.hero_section__btn}>Попробовать</div>
        </div>
        {/* <Canvas/> */}
      </div>
    </section>
  );
}

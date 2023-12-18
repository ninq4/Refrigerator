import { Canvas } from '@/app/components/canvas/canvas';
import style from './hero.module.scss';

export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <h1 className={style.hero_section__title} style={{ width: '553px' }}>Надежный виртуальный хостинг для всех</h1>
          <div className={style.hero_section__btn}>Попробовать</div>
        </div>
        {/* <Canvas/> */}
      </div>
    </section>
  );
}

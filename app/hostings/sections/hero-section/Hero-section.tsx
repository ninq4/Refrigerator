import { Canvas } from '@/app/components/canvas/canvas';
import style from './hero.module.scss';

export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={`${style.section__container}`}>
        <div className={style.section__inner}>
          <h1 className={style.section__title} >Надежный виртуальный хостинг для всех</h1>
          <div className={style.section__btn}>Попробовать</div>
        </div>
        {/* <Canvas/> */}
      </div>
    </section>
  );
}

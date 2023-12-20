import style from './hero.module.scss';
import SplineCanvas from '../canvas/SplineCanvas';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={style.section__block}>
        <div className={`${style.section__container}`}>
          <div className={style.section__inner}>
            <div className={style.section__left}>
              <h1 className={style.section__title}>Сайт</h1>
              <p className={style.section__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo sunt natus
                dolores, tenetur vero facilis expedita similique qui laboriosam! Nesciunt distinctio
                nemo atque doloribus quod minima, suscipit, sequi temporibus sit libero veniam
                asperiores sint. Adipisci minus quam est saepe reprehenderit, quae qui accusamus
                numquam eius architecto, quaerat commodi repellendus.
              </p>
              <div className={style.section__btn}>Попробовать</div>
            </div>
            <div className={style.section__right}>
              <SplineCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

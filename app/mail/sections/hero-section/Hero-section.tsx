import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <div className={style.hero_section__left}>
            <h1 className={style.hero_section__title}>Удобная и безопасная почта для бизнеса</h1>
            <p className={style.hero_section__description}>
              Быстрая электронная почта, предназначенная для комфортной работы с почтой для бизнеса
            </p>
          </div>
          <div className={style.hero_section__right}>{/* <SplineCanvas /> */}</div>
        </div>
      </div>
    </section>
  );
}

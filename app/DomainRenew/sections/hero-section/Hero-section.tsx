import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={`${style.section__container}`}>
        <div className={style.section__inner}>
            <h1 className={style.section__title}>Продление домена</h1>
            <p className={style.section__description}>
              Продлевайте домены в зоне .ru и .рф бесплатно
            </p>
        </div>
      </div>
    </section>
  );
}

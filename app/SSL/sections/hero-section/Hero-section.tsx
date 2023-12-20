import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={`${style.section__container}`}>
        <div className={style.section__inner}>
          <h1 className={style.section__title}>SSL-сертификаты</h1>
          <p className={style.section__subtitle}>
            Повышают репутацию вашего сайта и обеспечивает безопасный обмен данными с посетителями{' '}
          </p>
          <button className={style.section__btn}>Узнать подробнее</button>
        </div>
      </div>
    </section>
  );
}

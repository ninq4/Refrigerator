import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <div className={style.hero_section__left}>
            <h1 className={style.hero_section__title}>Партнёрская программа</h1>
            <p className={style.hero_section__description}>
            Станьте нашим партнером и получайте регулярный доход, привлекая клиентов на наш хостинг.
Если вы ищете надежный способ зарабатывать в интернете, то партнерская программа Timeweb — это ваш идеальный выбор            </p>
            <div className={style.hero_section__btn}>Попробовать</div>
          </div>
          <div className={style.hero_section__right}>
            </div>
        </div>
      </div>
    </section>
  );
}

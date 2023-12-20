import style from "./hero.module.scss";
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <div className={style.hero_section__left}>
            <h1 className={style.hero_section__title}>
              Аренда выделенного сервера
            </h1>
            <p className={style.hero_section__description}>
              Физические серверы любой конфигурации: готовые сборки и под заказ
            </p>
            <div className={style.hero_section__btn}>Заказать сервер</div>
          </div>
          <div className={style.hero_section__right}></div>
        </div>
      </div>
    </section>
  );
}

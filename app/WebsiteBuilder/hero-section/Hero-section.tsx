import style from "./hero.module.scss";
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <div className={style.hero_section__left}>
            <h1 className={style.hero_section__title}>
              Универсальные шаблоны для создания сайтов
            </h1>
            <p className={style.hero_section__description}>
              Создайте сайт за 15 минут без дизайнеров и программистов
            </p>
            <div className={style.hero_section__btn}>Создать сайт</div>
          </div>
          <div className={style.hero_section__right}></div>
        </div>
      </div>
    </section>
  );
}

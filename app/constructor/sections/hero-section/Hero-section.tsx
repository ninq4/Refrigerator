import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={style.section__block}>
        <div className={`${style.section__container}`}>
          <div className={style.section__inner}>
            <h1 className={style.section__title}>Простой конструктор сайтов</h1>
            <p className={style.section__subtitle}>
              Создайте сайт за 15 минут без дизайнеров и программистов
            </p>
            <form action="" className={`${style.section__form}`}>
              <input
                placeholder="Введите Email"
                type="text"
                className={style.section__form_input}
              />
            </form>
            <button className={style.section__btn}>Создать сайт</button>
          </div>
        </div>
      </div>
    </section>
  );
}

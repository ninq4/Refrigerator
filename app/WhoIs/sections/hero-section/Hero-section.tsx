import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <h1 className={style.hero_section__title}>Whois-проверка домена</h1>
          <p className={style.hero_section__subtitle}>
            Whois-сервис позволяет узнать, когда был зарегистрирован
          </p>
          <form action="" className={`${style.hero_section__form}`}>
            <input
              placeholder="Введите домен или слово"
              type="text"
              className={style.hero_section__form_input}
            />
            <button className={style.hero_section__form_btn}>Подобрать</button>
          </form>
        </div>
      </div>
    </section>
  );
}

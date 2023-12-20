import { ButtonOverLay } from './components/ButtonOverLay';
import style from './hero.module.scss';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.hero_section}`}>
      <div className={`${style.hero_section__container}`}>
        <div className={style.hero_section__inner}>
          <h1 className={style.hero_section__title}>Перенос домена</h1>
          <p className={style.hero_section__subtitle}>Смена регистратора домена</p>
          <ButtonOverLay/>
        </div>
      </div>
    </section>
  );
}

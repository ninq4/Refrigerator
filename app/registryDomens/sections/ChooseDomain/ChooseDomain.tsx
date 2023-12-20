import style from './ChooseDomain.module.scss';

export const ChooseDomain = () => {
  return (
    <section className={style.chooseDomain_section}>
      <div className={style.chooseDomain_section__container}>
        <div className={style.chooseDomain_section__inner}>
          <h4 className={style.chooseDomain_section__title}>Нашли домен, но он занят?</h4>
          <p className={style.chooseDomain_section__descr}>
            Договоримся о продаже домена с владельцем и застолбим его за вами
          </p>
        </div>
        <button className={style.chooseDomain_section__btn}>Подобрать домен</button>
      </div>
    </section>
  );
};

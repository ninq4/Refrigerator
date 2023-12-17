import style from './domen.module.scss';
import { DomenListItem } from './domenListItem/domenListItem';
import Link from 'next/link';

export const DomenSection = () => {
  const domenList = [
    { title: '.ru', price: '119', oldPrice: '' },
    { title: '.рф', price: '119', oldPrice: '' },
    { title: '.com', price: '1 400', oldPrice: '1 930' },
    { title: '.xyz', price: '216', oldPrice: '219' },
    { title: '.shop', price: '299', oldPrice: '5 522' },
  ];

  return (
    <section className={style.domen_section}>
      <div className={style.domen_section__container}>
        <div className={style.domen_section__inner}>
          <h3 className={style.domen_section__title}>Все начинается с домена</h3>
          <form action="" className={`${style.domen_section__form} ${style.domen_form}`}>
            <input
              placeholder="Введите домен или слово"
              type="text"
              className={style.domen_form__input}
            />
            <button className={style.domen_form__button}>Подобрать</button>
          </form>
          <div className={style.domen_section__domens}>
            <ul className={style.domen_section__list}>
              {domenList.map((item) => (
                <DomenListItem
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  oldPrice={item?.oldPrice}
                />
              ))}
            </ul>
            <Link href={''} className={style.domen_section__more}>
              еще 456
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

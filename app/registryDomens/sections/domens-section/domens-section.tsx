import style from './domens.module.scss';

export const DomensSection = () => {
  return (
    <section className={style.section}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <ul className={style.section__list}>
            {DomensList.map((item, pos) => (
              <RanderDomens key={pos} title={item.title} price={item.price} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const RanderDomens = ({ title, price }: { title: string; price: number }) => {
  return (
    <li className={style.section__items}>
      <h5 className={style.section__items_title}>.{title}</h5>
      <p className={style.section__items_price}>
        {price} ₽ <span>/мес</span>
      </p>
      <p className={style.section__items_registry}>Регистрация</p>
    </li>
  );
};
const DomensList = [
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
  {
    categoryId: 0,
    title: 'com',
    price: 1000,
  },
];

import style from '../servers.module.scss';
export const RanderCards = ({
  title,
  priceMonth,
  priceDay,
  items,
}: {
  title: string;
  priceMonth: number;
  priceDay: number;
  items: {
    name: string;
    service: string;
  }[];
}) => {
  return (
    <li className={style.section__item}>
      <article className={`${style.section__card} ${style.card}`}>
        <div className={style.card__textWrapper}>
          <h3 className={style.card__title}>{title}</h3>
          <p className={style.card__priceMonth}>
            {priceMonth} ₽ <span className={style.card__priceMonth_span}>/мес</span>
          </p>
          <p className={style.card__priceDay}>{priceDay} ₽ / день</p>
        </div>
        <ul className={style.card__list}>
          {items.map((item, pos) => (
            <RanderItems key={pos} name={item.name} service={item.service} />
          ))}
        </ul>
        <button className={style.card__btn}>Заказать</button>
      </article>
    </li>
  );
};
const RanderItems = ({ name, service }: { name: string; service: string }) => {
  return (
    <li className={style.card__item}>
      <p className={style.card__name}>{name}</p>
      <p className={style.card__service}>{service}</p>
    </li>
  );
};

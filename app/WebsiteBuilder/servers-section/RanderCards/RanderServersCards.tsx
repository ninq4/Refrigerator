import style from '../servers-section.module.scss';
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
    <li className={style.servers_section__item}>
      <article className={`${style.servers_section__card} ${style.servers_card}`}>
        <div className={style.servers_card__textWrapper}>
          <h3 className={style.servers_card__title}>{title}</h3>
          <p className={style.servers_card__priceMonth}>
            {priceMonth} ₽ <span className={style.servers_card__priceMonth_span}>/мес</span>
          </p>
          <p className={style.servers_card__priceDay}>{priceDay} ₽ / день</p>
        </div>
        <ul className={style.servers_card__list}>
          {items.map((item, pos) => (
            <RanderItems key={pos} name={item.name} service={item.service} />
          ))}
        </ul>
        <button className={style.servers_card__btn}>Создать сайт</button>
      </article>
    </li>
  );
};
const RanderItems = ({ name, service }: { name: string; service: string }) => {
  return (
    <li className={style.servers_card__item}>
      <p className={style.servers_card__name}>{name}</p>
      <p className={style.servers_card__service}>{service}</p>
    </li>
  );
};

import style from '../sections/hostings-section/hosting-section.module.scss';
export const RenderHosts = ({
  title,
  subtitle,
  price,
  oldprice,
  dercrs,
}: {
  title: string;
  subtitle: string;
  price: number;
  oldprice?: number;
  dercrs: any;
}) => {
  return (
    <li className={style.hostings_section__tabs_item}>
      <article className={`${style.hostings_section__tabs_article} ${style.hosting_article}`}>
        <div className={style.hosting_article__body}>
          <h2 className={style.hosting_article__title}>{title}</h2>
          <p className={style.hosting_article__subtitle}>{subtitle}</p>
          <div className={style.hosting_article__priceList}>
            <p className={style.hosting_article__price}>
              {price} ₽ <span className={style.hosting_article__price_span}>/мес</span>
            </p>
            <p className={style.hosting_article__oldPrice}>{oldprice}</p>
          </div>
        </div>
        <ul className={style.hosting_article__list}>
          {dercrs.map((descr: string) => RenderItems(descr))}
        </ul>
        <button className={style.hosting_article__button}>Попробовать</button>
      </article>
    </li>
  );
};

const RenderItems = (item: string) => {
  return <li className={style.hosting_article__item}>{item}</li>;
};

'use client';
import style from '../sections/hostings-section/hosting.module.scss';
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
    <li className={style.section__tabs_item}>
      <article className={`${style.hsection__tabs_article} ${style.article}`}>
        <div className={style.article__body}>
          <h2 className={style.article__title}>{title}</h2>
          <p className={style.article__subtitle}>{subtitle}</p>
          <div className={style.article__priceList}>
            <p className={style.article__price}>
              {price} ₽ <span className={style.article__price_span}>/мес</span>
            </p>
            <p style={oldprice === undefined ? { display: 'none' } : {}} className={style.article__oldPrice}>
              {oldprice} ₽ /мес
            </p>
          </div>
        </div>
        <ul className={style.article__list}>
          {dercrs.map((descr: string) => RenderItems(descr))}
        </ul>
        <button className={style.article__button}>Попробовать</button>
      </article>
    </li>
  );
};

const RenderItems = (item: string) => {
  return <li className={style.hosting_article__item}>{item}</li>;
};

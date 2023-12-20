import style from "../SSLs.module.scss"
export const RenderCard = ({ title, price, list }: { title: string; price: number; list: {name: string; service: string}[] }) => {
    return (
      <li className={style.section__item}>
        <article className={`${style.section__article} ${style.article}`}>
          <div className={style.article__textWrapper}>

          <h2 className={style.article__title}>{title}</h2>
          <p className={style.article__price}>
            {price} ₽<span> / месяц</span>
          </p>
          </div>
  
          <ul className={style.article__list}>
            {list.map((item, pos) => (
              <RanderItems key={pos} name={item.name} service={item.service} />
            ))}
          </ul>
          <button className={style.article__btn}>Заказать</button>
        </article>
      </li>
    );
  };
  
  const RanderItems = ({name, service}: any) => {
    return (
      <>
          <li className={style.article__item}>
              <p className={style.article__item_name}>{name}</p>
              <p className={style.article__item_service}>{service}</p>
          </li>
      </>
    );
  }
  
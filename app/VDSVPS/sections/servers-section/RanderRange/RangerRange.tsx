import style from '../servers-section.module.scss';
export const RanderRange = () => {
  return (
    <li className={style.servers_section__item}>
      <article className={`${style.servers_section__card} ${style.servers_card}`}>
        <div className={style.servers_card__textWrapper}>
          <h3 className={style.servers_card__title}>Создай свой сервер</h3>
          <p className={style.servers_card__priceMonth}>
            999 ₽ <span className={style.servers_card__priceMonth_span}>/мес</span>
          </p>
          <p className={style.servers_card__priceDay}>999 ₽ / день</p>
        </div>
        <ul style={{marginBottom: '0'}} className={style.servers_card__list}>
          <li className={style.servers_card__range_wrapper}>
            <form action="" className={style.servers_card__range_form}>
              <div className={style.servers_card__range_head}>
                <p className={style.servers_card__range_name}>
                  СPU <span className={style.servers_card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.servers_card__range_count}>1</p>
              </div>
              <input type="range" className={style.servers_card__range_input} />
            </form>
          </li>
          <li className={style.servers_card__range_wrapper}>
            <form action="" className={style.servers_card__range_form}>
              <div className={style.servers_card__range_head}>
                <p className={style.servers_card__range_name}>
                  СPU <span className={style.servers_card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.servers_card__range_count}>1</p>
              </div>
              <input type="range" className={style.servers_card__range_input} />
            </form>
          </li>
          <li className={style.servers_card__range_wrapper}>
            <form action="" className={style.servers_card__range_form}>
              <div className={style.servers_card__range_head}>
                <p className={style.servers_card__range_name}>
                  СPU <span className={style.servers_card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.servers_card__range_count}>1</p>
              </div>
              <input type="range" className={style.servers_card__range_input} />
            </form>
          </li>
        </ul>
        <button className={style.servers_card__btn}>Заказать</button>
      </article>
    </li>
  );
};

import style from '../servers.module.scss';
export const RanderRange = () => {
  return (
    <li className={style.section__item}>
      <article className={`${style.section__card} ${style.card}`}>
        <div className={style.card__textWrapper}>
          <h3 className={style.card__title}>Создай свой сервер</h3>
          <p className={style.card__priceMonth}>
            999 ₽ <span className={style.card__priceMonth_span}>/мес</span>
          </p>
          <p className={style.card__priceDay}>999 ₽ / день</p>
        </div>
        <ul style={{ marginBottom: '0' }} className={style.card__list}>
          <li className={style.card__range_wrapper}>
            <form action="" className={style.card__range_form}>
              <div className={style.card__range_head}>
                <p className={style.card__range_name}>
                  СPU <span className={style.card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.card__range_count}>1</p>
              </div>
              <input type="range" className={style.card__range_input} />
            </form>
          </li>
          <li className={style.card__range_wrapper}>
            <form action="" className={style.card__range_form}>
              <div className={style.card__range_head}>
                <p className={style.card__range_name}>
                  СPU <span className={style.card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.card__range_count}>1</p>
              </div>
              <input type="range" className={style.card__range_input} />
            </form>
          </li>
          <li className={style.card__range_wrapper}>
            <form action="" className={style.card__range_form}>
              <div className={style.card__range_head}>
                <p className={style.card__range_name}>
                  СPU <span className={style.card__range_nameSpan}>3.3 ГГц</span>
                </p>
                <p className={style.card__range_count}>1</p>
              </div>
              <input type="range" className={style.card__range_input} />
            </form>
          </li>
        </ul>
        <button className={style.card__btn}>Заказать</button>
      </article>
    </li>
  );
};

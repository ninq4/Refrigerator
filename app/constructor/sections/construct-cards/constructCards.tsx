import style from './constructCards.module.scss';
export const ConstructCards = () => {
  const CardsList = [
    {
      title: 'Базовый',
      price: 255,
      list: [
        { title: '1 сайт' },
        { title: '150 шаблонов' },
        { title: '170 блоков' },
        { title: 'Дизайн блоков' },
        { title: 'Функционал блоков' },
        { title: 'Отключение лейбла платформы' },
        { title: 'Бесплатный SSL-сертификат' },
      ],
    },
    {
      title: 'Premium',
      price: 255,
      list: [
        { title: '5 сайтов' },
        { title: 'Все опции Базового тарифа' },
        { title: 'Настройки SEO' },
        { title: 'Система аналитики' },
        { title: 'Интеграции с сервисами' },
        { title: 'Интернет-магазин' },
        { title: 'Заявки в Telegram' },
        { title: 'Загрузка файлов на сайт' },
        { title: 'Инструменты дизайнера' },
      ],
    },
    {
      title: 'Ultra',
      price: 255,
      list: [
        { title: '20 сайтов' },
        { title: 'Все опции Премиум тарифа' },
        { title: 'Перенос сайтов между аккаунтами' },
        { title: 'Доступ к API' },
      ],
    },
  ];
  return (
    <section className={style.section}>
      <div className={style.section__container}>
        <ul className={style.section__inner}>
          {CardsList.map((item, pos) => (
            <RanderCards key={pos} title={item.title} price={item.price} list={item.list} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const RanderCards = ({
  title,
  price,
  list,
}: {
  title: string;
  price: number;
  list: { title: string }[];
}) => {
  return (
    <li className={style.section__item}>
      <article className={`${style.section__article} ${style.article}`}>
        <div className={style.article__cardWrapper}>
          <h3 className={style.article__title}>{title}</h3>
          <p className={style.article__price}>
            {price} ₽<span>/ мес</span>
          </p>
          <ul className={style.article__list}>
            {list.map((item, pos) => RanderItems(item.title))}
          </ul>
        </div>
        <button className={style.article__button}>Выбрать</button>
      </article>
    </li>
  );
};
const RanderItems = (title: any) => {
  return <li className={style.article__item}>{title}</li>;
};

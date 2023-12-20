import { RanderCards } from './RanderCards/RanderServersCards';
import style from './servers-section.module.scss';
export const ServersSection = () => {
  const CardList = [
    {
      title: 'Базовый',
      priceMonth: 189,
      priceDay: 159,
      items: [
        {
          name: '1',
          service: 'сайт',
        },
        {
          name: '150',
          service: 'шаблонов',
        },
        {
          name: '170',
          service: 'блоков',
        },
        {
          name: 'Дизайн-блок',
        },
        {
          name: 'Функционал блога',
        },
      ],
    },
    {
      title: 'Базовый',
      priceMonth: 189,
      priceDay: 159,
      items: [
        {
          name: '1',
          service: 'сайт',
        },
        {
          name: '150',
          service: 'шаблонов',
        },
        {
          name: '170',
          service: 'блоков',
        },
        {
          name: 'Дизайн-блок',
        },
        {
          name: 'Функционал блога',
        },
      ],
    },
    {
      title: 'Базовый',
      priceMonth: 189,
      priceDay: 159,
      items: [
        {
          name: '1',
          service: 'сайт',
        },
        {
          name: '150',
          service: 'шаблонов',
        },
        {
          name: '170',
          service: 'блоков',
        },
        {
          name: 'Дизайн-блок',
        },
        {
          name: 'Функционал блога',
        },
      ],
    },
    {
      title: 'Базовый',
      priceMonth: 189,
      priceDay: 159,
      items: [
        {
          name: '1',
          service: 'сайт',
        },
        {
          name: '150',
          service: 'шаблонов',
        },
        {
          name: '170',
          service: 'блоков',
        },
        {
          name: 'Дизайн-блок',
        },
        {
          name: 'Функционал блога',
        },
      ],
    },
  ];
  return (
    <section className={`main__servers-section ${style.servers_section}`}>
      <div className={style.servers_section__container}>
        <div className={style.servers_section__inner}>
          {/* <Vidgets /> */}
          <ul className={style.servers_section__list}>
            {CardList.map((item, pos) => (
              <RanderCards
                key={pos}
                title={item.title}
                priceMonth={item.priceMonth}
                priceDay={item.priceDay}
                items={item.items}
              />
            ))}
            {/* <RanderRange /> */}
          </ul>
        </div>
      </div>
    </section>
  );
};


export default ServersSection
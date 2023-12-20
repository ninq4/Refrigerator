import style from './servers.module.scss';
import { RanderCards } from './RanderCards/RanderServersCards';
import { RanderRange } from './RanderRange/RangerRange';
import { Vidgets } from './vidgets/vidgets';
export const ServersSection = () => {
  const CardList = [
    {
      title: 'Year+',
      priceMonth: 999,
      priceDay: 999,
      items: [
        {
          name: 'CPU',
          service: '1 x 3.3 ГГц',
        },
        {
          name: 'RAM',
          service: '1 ГБ RAM',
        },
        {
          name: 'NVME',
          service: '15 ГБ',
        },
        {
          name: 'Интернет',
          service: '200 МБ/с',
        },
        {
          name: 'IP-Адрес',
          service: 'Бесплатно',
        },
      ],
    },
    {
      title: 'Year+',
      priceMonth: 999,
      priceDay: 999,
      items: [
        {
          name: 'CPU',
          service: '1 x 3.3 ГГц',
        },
        {
          name: 'RAM',
          service: '1 ГБ RAM',
        },
        {
          name: 'NVME',
          service: '15 ГБ',
        },
        {
          name: 'Интернет',
          service: '200 МБ/с',
        },
        {
          name: 'IP-Адрес',
          service: 'Бесплатно',
        },
      ],
    },
    {
      title: 'Year+',
      priceMonth: 999,
      priceDay: 999,
      items: [
        {
          name: 'CPU',
          service: '1 x 3.3 ГГц',
        },
        {
          name: 'RAM',
          service: '1 ГБ RAM',
        },
        {
          name: 'NVME',
          service: '15 ГБ',
        },
        {
          name: 'Интернет',
          service: '200 МБ/с',
        },
        {
          name: 'IP-Адрес',
          service: 'Бесплатно',
        },
      ],
    },
  ];
  return (
    <section className={`main__servers-section ${style.section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <Vidgets />
          <ul className={style.section__list}>
            {CardList.map((item, pos) => (
              <RanderCards
                key={pos}
                title={item.title}
                priceMonth={item.priceMonth}
                priceDay={item.priceDay}
                items={item.items}
              />
            ))}
            <RanderRange />
          </ul>
        </div>
      </div>
    </section>
  );
};

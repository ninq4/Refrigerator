import { RanderCards } from './RanderCards/RanderServersCards';
import { RanderRange } from './RanderRange/RangerRange';
import style from './servers-section.module.scss';
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
    <section className={`main__servers-section ${style.servers_section}`}>
      <div className={style.servers_section__container}>
        <div className={style.servers_section__inner}>
          <Vidgets />
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
            <RanderRange />
          </ul>
        </div>
      </div>
    </section>
  );
};

import style from './performans-section.module.scss';
import Image from 'next/image';
import File from '@/public/code100.png';
import Voice from '@/public/icon2.png';
import Mail from '@/public/icon3.png';
import Clock from '@/public/cal100.png';
import Star from '@/public/Prize100.png';
import Lock from '@/public/Money100.png';
import { RenderCards } from './RanderCards/RanderCards';
export const PerformansSection = () => {
  return (
    <section className={`main__performans_section ${style.performans_section}`}>
      <div className={style.performans_section__container}>
        <div className={style.performans_section__inner}>
          <h3 className={style.performans_section__title}>На любом тарифе вам доступны</h3>
          <ul className={style.performans_section__list}>
            {RanderItems.map((item, pos) => (
              <RenderCards key={pos} image={item.image} title={item.title} descr={item.descr} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const RanderItems = [
  {
    image: Mail,
    title: 'Независимость от «соседей»',
    descr:
      'Полная изолированность от других пользователей. Все мощности сервера только ваши',
  },
  {
    image: Clock,
    title: 'Сборки под любой запрос',
    descr: 'Подойдут для любых ресурсоемких проектов. А если будет нужно, подберем и закупим оборудование под ваш проект',
  },
  {
    image: Voice,
    title: 'Быстрый запуск',
    descr:
      'Готовый выделенный сервер запустим в тот же день. Нестандартную сборку — за 2–3 дня. Сервер под заказ — за неделю',
  },
  {
    image: Star,
    title: 'Проверенное железо',
    descr:
      'Используем надежное оборудование: серверные платформы от Supermicro и процессоры последних поколений от Intel и AMD',
  },
  {
    image: File,
    title: 'Высокоскоростной канал',
    descr: 'Базовая ширина канала — 100 мбит в секунду, но ее можно увеличить до 10 гбит. Трафик не ограничиваем, а порты не блокируем',
  },
  {
    image: Lock,
    title: 'Тестовый период',
    descr: 'Любой готовый или собранный на конфигураторе сервер можно бесплатно тестировать в течение 5 дней',
  },
];

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
    title: 'Бесплатная почта',
    descr:
      'Создайте почту со своим доменом. Получайте заявки от покупателей и настраивайте рассылки клиентам',
  },
  {
    image: Clock,
    title: 'Создание сайта за минуту',
    descr: 'Создайте сайт для любых целей меньше чем за минуту и начните его наполнение',
  },
  {
    image: Voice,
    title: 'Поддержка 24/7',
    descr:
      'Наша команда поддержки всегда готова помочь разобраться со сложными задачами и никогда не бросит вас в беде',
  },
  {
    image: Star,
    title: 'Права доступа',
    descr:
      'Нужно дать доступ к сайту разработчику? Создайте для него аккаунт с ограниченными правами ',
  },
  {
    image: File,
    title: 'Простой файловый менеджер',
    descr: 'Работать с файлами сможет даже новичок, прямо в панели',
  },
  {
    image: Lock,
    title: 'Бесплатный SSL-сертификат',
    descr: 'Главный элемент доверия и безопасности сайта в сети',
  },
];

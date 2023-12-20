import style from './guarantee-section.module.scss';
import Image from 'next/image';

import Like from '@/public/icon1.png';
import Phone from '@/public/icon2.png';
import Signal from '@/public/icon3.png';


export const GuaranteeSection = () => {
  return (
    <section className={`main__guerantee-section ${style.guarantee_section}`}>
      <div className={style.guarantee_section__container}>
        <ul className={style.guarantee_section__inner}>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image className={style.guarantee_section__card_image} alt="" src={Like} />
            </div>
            <h5 className={style.guarantee_section__card_title}>100+ шаблонов</h5>
            <p className={style.guarantee_section__card_descr}>
            Просто добавьте свой текст и фотографии
            </p>
          </li>
          <li
            className={`${style.guarantee_section__card} ${style.guarantee_section__card__primary}`}>
            <div
              className={`${style.guarantee_section__imageBorder} ${style.guarantee_section__imageBorder__primary}`}>
              <Image
                alt=""
                src={Phone}
                className={`${style.guarantee_section__card_image} ${style.guarantee_section__card_image__primary}`}
              />
            </div>
            <h5
              className={`${style.guarantee_section__card_title} ${style.guarantee_section__card_title__primary}`}>
              150+ блоков
            </h5>
            <p
              className={`${style.guarantee_section__card_descr} ${style.guarantee_section__card_descr__primary}`}>
              Соберите сайт, словно строите домик из конструктора
            </p>
          </li>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image className={style.guarantee_section__card_image} alt="" src={Signal} />
            </div>
            <h5 className={style.guarantee_section__card_title}>Дизайн-блок</h5>
            <p className={style.guarantee_section__card_descr}>
            Создайте сайт
с уникальным дизайном
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};


export default GuaranteeSection
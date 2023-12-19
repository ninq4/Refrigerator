import style from './guarantee-section.module.scss';
import Image from 'next/image';

import Like from '@/public/Like.svg';
import Phone from '@/public/phone.svg';
import Signal from '@/public/signal.svg';


export const GuaranteeSection = () => {
  return (
    <section className={`main__guerantee-section ${style.guarantee_section}`}>
      <div className={style.guarantee_section__container}>
        <ul className={style.guarantee_section__inner}>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image className={style.guarantee_section__card_image} alt="" src={Like} />
            </div>
            <h5 className={style.guarantee_section__card_title}>Гарантия SLA 99,9%</h5>
            <p className={style.guarantee_section__card_descr}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse corrupti maxime
              incidunt, tempore id ex nobis vero suscipit error voluptatum.
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
              Круглосуточная поддержка качества 24/7
            </h5>
            <p
              className={`${style.guarantee_section__card_descr} ${style.guarantee_section__card_descr__primary}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse corrupti maxime
              incidunt, tempore id ex nobis vero suscipit error voluptatum.
            </p>
          </li>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image className={style.guarantee_section__card_image} alt="" src={Signal} />
            </div>
            <h5 className={style.guarantee_section__card_title}>Круглосуточный мониторинг</h5>
            <p className={style.guarantee_section__card_descr}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse corrupti maxime
              incidunt, tempore id ex nobis vero suscipit error voluptatum.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

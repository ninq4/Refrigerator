import style from './protect-section.module.scss';
import protect from '@/public/protect-image.png';
import Image from 'next/image';
export const ProtectSection = () => {
  return (
    <section className={`main__protect-section ${style.protect_section}`}>
      <div className={style.protect_section__container}>
        <div className={style.protect_section__inner}>
          <h3 className={style.protect_section__title}>Мы отвечаем за выши данные</h3>
          <div className={style.protect_section__banner}>
            <div className={style.protect_section__banner_inner}>
              <h4 className={style.protect_section__banner_title}>Ваши данные надежно защищенны</h4>
              <p className={style.protect_section__banner_descr}>
                Серверы сертифицированы и отвечают всем требованиям по защите данных:
              </p>
              <ul className={style.protect_section__list}>
                <li className={style.protect_section__item}>
                  <p className={style.protect_section__item_title}>152-ФЗ</p>
                  <p className={style.protect_section__item_descr}>
                    Федеральный закон РФ о защите персональных данных
                  </p>
                </li>
                <li className={style.protect_section__item}>
                  <p className={style.protect_section__item_title}>PCI DSS</p>
                  <p className={style.protect_section__item_descr}>
                    Стандарты по безопасности платежных данных VISA и Mastercard
                  </p>
                </li>
                <li className={style.protect_section__item}>
                  <p className={style.protect_section__item_title}>ISO</p>
                  <p className={style.protect_section__item_descr}>
                    Международные стандарты по проектированию дата-центров
                  </p>
                </li>
              </ul>
            </div>
            <Image src={protect} alt="" className={style.protect_section__image}/>
          </div>
        </div>
      </div>
    </section>
  );
};

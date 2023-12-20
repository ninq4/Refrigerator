import style from "./performance-section.module.scss";
import Image from "next/image";
export const PerformanceSection = () => {
  return (
    <section className={style.performance_section}>
      <div className={style.performance_section__container}>
        <div className={style.performance_section__inner}>
          <ul className={style.performance_section__list}>
            <li
              className={`${style.performance_section__item} ${style.performance_section__item__primary}`}
            >
              <div
                className={`${style.performance_section__imageBorder} ${style.performance_section__imageBorder__primary}`}
              >
                <Image
                  alt="1"
                  src={"/prize100.png"}
                  width={50}
                  height={50}
                  className={`${style.performance_section__item_image} ${style.performance_section__item_image__primary}`}
                />
              </div>
              <h5
                className={`${style.performance_section__item_title} ${style.performance_section__item_title__primary}`}
              >
                Большой выбор зон
              </h5>
              <p
                className={`${style.performance_section__item_descr} ${style.performance_section__item_descr__primary}`}
              >
                Поддержка доменов в более чем 300 зонах
              </p>
            </li>
            <li className={style.performance_section__item}>
              <div className={style.performance_section__imageBorder}>
                <Image
                  className={style.performance_section__item_image}
                  alt=""
                  src={"/carticon.png"}
                  width={50}
                  height={50}
                />
              </div>
              <h5 className={style.performance_section__item_title}>
                Низкие цены
              </h5>
              <p className={style.performance_section__item_descr}>
                Выгодная стоимость регистрации и продления
              </p>
            </li>
            <li className={style.performance_section__item}>
              <div className={style.performance_section__imageBorder}>
                <Image
                  className={style.performance_section__item_image}
                  alt=""
                  src={"/icon2.png"}
                  width={50}
                  height={50}
                />
              </div>
              <h5 className={style.performance_section__item_title}>
                Поддержка 24/7
              </h5>
              <p className={style.performance_section__item_descr}>
                100+ специалистов поддержки, которые придут на помощь
              </p>
            </li>
            <li
              className={`${style.performance_section__item} ${style.performance_section__item__primary}`}
            >
              <div
                className={`${style.performance_section__imageBorder} ${style.performance_section__imageBorder__primary}`}
              >
                <Image
                  alt=""
                  src={"/bulb.png"}
                  width={50}
                  height={50}
                  className={`${style.performance_section__item_image} ${style.performance_section__item_image__primary}`}
                />
              </div>
              <h5
                className={`${style.performance_section__item_title} ${style.performance_section__item_title__primary}`}
              >
                Бесплатный сертификат
              </h5>
              <p
                className={`${style.performance_section__item_descr} ${style.performance_section__item_descr__primary}`}
              >
                SSL Lets Encrypt для каждого купленного домена
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

import style from "./guarantee-section.module.scss";
import Image from "next/image";

import Like from "@/public/protect-image.png";
import Phone from "@/public/Carticon.png";
import Signal from "@/public/icon2.png";

export const GuaranteeSection = () => {
  return (
    <section className={`main__guerantee-section ${style.guarantee_section}`}>
      <div className={style.guarantee_section__container}>
        <ul className={style.guarantee_section__inner}>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image
                className={style.guarantee_section__card_image}
                alt=""
                src={Like}
              />
            </div>
            <h5 className={style.guarantee_section__card_title}>Отчетность</h5>
            <p className={style.guarantee_section__card_descr}>
              Вы сможете получать отчетные документы на электронную почту или
              через электронный документооборот (ЭДО).
            </p>
          </li>
          <li
            className={`${style.guarantee_section__card} ${style.guarantee_section__card__primary}`}
          >
            <div
              className={`${style.guarantee_section__imageBorder} ${style.guarantee_section__imageBorder__primary}`}
            >
              <Image
                alt=""
                src={Phone}
                className={`${style.guarantee_section__card_image} ${style.guarantee_section__card_image__primary}`}
              />
            </div>
            <h5
              className={`${style.guarantee_section__card_title} ${style.guarantee_section__card_title__primary}`}
            >
              Безналичные платежи
            </h5>
            <p
              className={`${style.guarantee_section__card_descr} ${style.guarantee_section__card_descr__primary}`}
            >
              Чтобы упростить оплату наших услуг и сделать финансовые операции
              более удобными, мы предоставляем вам безналичные платежи.
            </p>
          </li>
          <li className={style.guarantee_section__card}>
            <div className={style.guarantee_section__imageBorder}>
              <Image
                className={style.guarantee_section__card_image}
                alt=""
                src={Signal}
              />
            </div>
            <h5 className={style.guarantee_section__card_title}>
              Единый реестр программ РФ
            </h5>
            <p className={style.guarantee_section__card_descr}>
              Запись в реестре № 1234 от 19.11.2022 произведена на основании
              приказа Министерства цифрового развития, связи и массовых
              коммуникаций РФ от 19.11.2019 № 742
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

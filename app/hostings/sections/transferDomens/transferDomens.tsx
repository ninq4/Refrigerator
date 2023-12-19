import style from './transferDomens.module.scss';
import Image from 'next/image';
import tranferDomensImage from '@/public/TransferDomens.png';
export const TransferDomens = () => {
  return (
    <section className={`main__transferDomens_section ${style.transferDomens_section}`}>
      <div className={style.transferDomens_section__container}>
        <div className={style.transferDomens_section__inner}>
          <div className={style.transferDomens_section__textWrapper}>
            <h3 className={style.transferDomens_section__title}>
              Бесплатно переведём домены .ru и .рф
            </h3>
            <p className={style.transferDomens_section__descr}></p>
          </div>
          <button className={style.transferDomens_section__btn}>Перенести сайт</button>
        </div>
        <Image alt="" src={tranferDomensImage} className={style.transferDomens_section__image} />
      </div>
    </section>
  );
};

import style from './transfer-section.module.scss';
import Image from 'next/image';
import tranferImage from "@/public/transfer-image.png"
export const TransferSection = () => {
  return (
    <section className={`main__transfer_section ${style.transfer_section}`}>
      <div className={style.transfer_section__container}>
        <div className={style.transfer_section__inner}>
          <div className={style.transfer_section__textWrapper}>
            <h3 className={style.transfer_section__title}>Перенесем сайт любой сложности</h3>
            <p className={style.transfer_section__descr}></p>
          </div>
          <button className={style.transfer_section__btn}>Перенести сайт</button>
        </div>
        <Image alt='' src={tranferImage} className={style.tranfer_section__image}/>
      </div>
    </section>
  );
};

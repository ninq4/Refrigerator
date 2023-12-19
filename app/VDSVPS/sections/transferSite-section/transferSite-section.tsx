import style from './transferSite-section.module.scss';

export const TransferSiteSection = () => {
  return (
    <section className={`main__transferSite-section ${style.transferSite_section}`}>
      <div className={style.transferSite_section__container}>
        <div className={style.transferSite_section__inner}>
        <div className={style.transferSite_section__head}>
            <h4 className={style.transferSite_section__title}>Бесплатно перенесем ваши сайты</h4>
            <button className={style.transferSite_section__btn}>Перенести проект</button>
        </div>
        <div className={style.transferSite_section__body}>
            
        </div>
        </div>
      </div>
    </section>
  );
};

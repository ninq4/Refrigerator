import style from './service-section.module.scss';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className={`{"main__service-section"} ${style.service_section}`}>
      <div className={style.service_section__container}>
        <div className={style.service_section__inner}>
          <div className={style.service_section__host}>
            <div className={style.service_section__host__textWrapper}>
              <h2 className={style.service_section__host_title}>Виртуальный хостинг</h2>
              <p className={style.service_section__host_descr}>
                Создавайте и размещайте сайты любой сложности — от простых визиток до больших
                магазинов на 1С-Битрикс
              </p>
            </div>
            <div className={style.service_section__host_btnWrapper}>
              <div className={style.service_section__host_btn}>Попробовать</div>
              <p className={style.service_section__host_price}>
                от <span className={style.service_section__host_priceSpan}>999</span> ₽ в месяц
              </p>
            </div>
          </div>
          <div className={style.service_section__vds}>
            <div className={style.service_section__vds_content}>
              <h3 className={style.service_section__vds_title}>Аренда VDS и VPS</h3>
              <p className={style.service_section__vds_descr}>
                Виртуальные серверы с почасовой оплатой. Меняйте конфигурацию сервера в любой момент
                и в пару кликов
              </p>
              <div className={style.service_section__vds_btnWrapper}>
                <div className={style.service_section__vds_btn}>Попробовать</div>
                <p className={style.service_section__vds_price}>
                  от <span className={style.service_section__vds_priceSpan}>999</span> ₽ в месяц
                </p>
              </div>
            </div>
          </div>
          <div className={style.service_section__servers}>
            <div className={style.service_section__servers__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>Виртуальный хостинг</h2>
                <Image alt="" src="/code.png" width={100} height={100} className={style.hosting} />
              </div>
              <p className={style.service_section__servers_descr}>
                Создавайте и размещайте сайты любой сложности — от простых визиток до больших
                магазинов на 1С-Битрикс
              </p>
            </div>
            <div className={style.service_section__servers_btnWrapper}>
              <div className={style.service_section__servers_btn}>Попробовать</div>
              <p className={style.service_section__servers_price}>
                от <span className={style.service_section__servers_priceSpan}>999</span> ₽ в месяц
              </p>
            </div>
          </div>
          <div className={style.service_section__construct}>
            <div className={style.service_section__construct__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>Конструктор сайтов</h2>
                <Image
                  alt=""
                  src="/laptope.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>
              <p className={style.service_section__construct_descr}>
                Адаптивный сайт за 15 минут — без программистов и дизайнеров. Собирайте из готовых
                шаблонов или меняйте блоки, как вам нужно
              </p>
            </div>
            <div className={style.service_section__construct_btnWrapper}>
              <div className={style.service_section__construct_btn}>Попробовать</div>
              <p className={style.service_section__construct_date}>
                от <span className={style.service_section__construct_dateSpan}>999</span> ₽ в месяц
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import style from './service-section.module.scss';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className={`{"main__service-section"} ${style.service_section}`}>
      <div className={style.service_section__container}>
        <div className={style.service_section__inner}>
          <div className={style.service_section__host}>
            <div className={style.service_section__host__textWrapper}>
              <h2 className={style.service_section__host_title}>Щедрые комиссии</h2>
              <p className={style.service_section__host_descr}>
              Мы платим нашим партнерам за каждого привлеченного клиента, и вы сами можете выбирать способ получения денежных средств: вывод на электронный кошелек или банковскую карту
              </p>
            </div>

          </div>
          <div className={style.service_section__vds}>
            <div className={style.service_section__vds_content}>
              <h3 className={style.service_section__vds_title}>Простое вступление
</h3>
              <p className={style.service_section__vds_descr}>
              Присоединиться к нашей партнерской программе легко и бесплатно. Нет сложных формальностей или договоров, которые замедляют начало заработка
              </p>

            </div>
          </div>
          <div className={style.service_section__servers}>
            <div className={style.service_section__servers__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>Удобный мониторинг</h2>
                <Image alt="" src="/code.png" width={100} height={100} className={style.hosting} />
              </div>
              <p className={style.service_section__servers_descr}>
              Подробная статистика по привлеченным рефералам: отслеживайте свой доход в реальном времени
              </p>
            </div>
          </div>
          <div className={style.service_section__construct}>
            <div className={style.service_section__construct__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>Поддержка</h2>
                <Image
                  alt=""
                  src="/laptope.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>
              <p className={style.service_section__construct_descr}>
              Мы ценим каждого партнера и готовы предоставить необходимую поддержку для достижения ваших финансовых целей
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

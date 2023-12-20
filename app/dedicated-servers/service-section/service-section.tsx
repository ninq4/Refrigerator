import style from "./service.module.scss";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className={`{"main__service-section"} ${style.section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <div className={style.section__host}>
            <div className={style.section__host__textWrapper}>
              <h2 className={style.section__host_title}>
                Оставьте заявку
              </h2>
              <p className={style.section__host_descr}>
                Выберите сервер или оставьте запрос на индивидуальную сборку
              </p>
            </div>
          </div>
          <div className={style.section__vds}>
            <div className={style.section__vds_content}>
              <h3 className={style.section__vds_title}>
                Закажите сервер
              </h3>
              <p className={style.section__vds_descr}>
                Оплатите сервер удобным способом или запросите у менеджера
                тестовый период
              </p>
            </div>
          </div>
          <div className={style.section__servers}>
            <div className={style.section__servers__textWrapper}>
              <div className={style.section__servers_block}>
                <h2 className={style.section__servers_title}>
                  Запустите проект
                </h2>
                <Image
                  alt=""
                  src="/code.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>

              <p className={style.section__servers_descr}>
                Перенесите свой проект на сервер сами или доверьте это нашей
                команде
              </p>
            </div>
            <div className={style.section__construct_btnWrapper}>
              <div className={style.section__construct_btn}>
                Заказать сервер
              </div>
            </div>
          </div>

          <div className={style.section__construct}>
            <div className={style.section__construct__textWrapper}>
              <div className={style.section__servers_block}>
                <h2 className={style.section__servers_title}>
                  Поможем с миграцией и запуском
                </h2>
                <Image
                  alt=""
                  src="/laptope.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>
              <p className={style.section__construct_descr}>
                Перенесем проект с вашего сервера или сервера другого облачного
                провайдера
              </p>
            </div>
            <div className={style.section__construct_btnWrapper}>
              <div className={style.section__construct_btn}>
                Перенести проект
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

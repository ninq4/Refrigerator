import style from './service-section.module.scss';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className={`{"main__service-section"} ${style.service_section}`}>
      <div className={style.service_section__container}>
        <div className={style.service_section__inner}>
          <div className={style.service_section__host}>
            <div className={style.service_section__host__textWrapper}>
              <h2 className={style.service_section__host_title}>
                Поможем перенести ваши почтовые ящики
              </h2>
              <p className={style.service_section__host_descr}>
                Мы готовы сделать этот процесс легким и безопасным для вас. Не беспокойтесь, мы
                возьмем на себя всю техническую часть
              </p>
            </div>
          </div>
          <div className={style.service_section__vds}>
            <div className={style.service_section__vds_content}>
              <h3 className={style.service_section__vds_title}>
                Используй почту для бизнеса по максимум!
              </h3>
              <p className={style.service_section__vds_descr}>
                Встречайте Timeweb Ai+ — помощника в написании электронной почты, который поможет
                вам с легкостью и быстротой создавать идеальные письма!
              </p>
            </div>
          </div>
          <div className={style.service_section__servers}>
            <div className={style.service_section__servers__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>
                  Управляй всеми ящиками сразу!
                </h2>
              </div>
              <p className={style.service_section__servers_descr}>
                Расширь свои возможности и управляй всей своей почтой с комфортом и удобством без
                ограничений
              </p>
            </div>
            <div className={style.service_section__servers_btnWrapper}>
              <div className={style.service_section__servers_btn}>Создать ящик</div>
            </div>
          </div>
          <div className={style.service_section__construct}>
            <div className={style.service_section__construct__textWrapper}>
              <div className={style.service_section__servers_block}>
                <h2 className={style.service_section__servers_title}>Удобная мобильная версия</h2>
              </div>
              <p className={style.service_section__construct_descr}>
                Всегда будьте на связи и управляйте своей электронной почтой прямо с вашего
                смартфона в любое время и в любом месте!
              </p>
            </div>
            <div className={style.service_section__construct_btnWrapper}>
              <div className={style.service_section__construct_btn}>Попробовать</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

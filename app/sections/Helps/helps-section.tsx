import style from './helps-section.module.scss';
import Link from 'next/link';
export const HelpsSection = () => {
  return (
    <section className={`{"main__helps_section"} ${style.helps_section}`}>
      <div className={style.helps_section__container}>
        <div className={style.helps_section__inner}>
          <h3 className={style.helps_section__title}>Поможем на всех этапах</h3>
          <ul className={style.helps_section__list}>
            <li className={style.helps_section__list_item}>
              <article className={`${style.helps_section__list_article} ${style.helps_article}}`}>
                <h4 className={style.helps_article__title}>
                  База
                  <br /> знаний
                </h4>
                <p className={style.helps_article__descr}>
                  Подробные инструкции по работе с сервисами hostname.com
                </p>
                <Link href={''} className={style.helps_article__link}>
                  Найти ответ
                </Link>
              </article>
            </li>
            <li className={style.helps_section__list_item}>
              <article className={`${style.helps_section__list_article} ${style.helps_article}}`}>
                <h4 className={style.helps_article__title}>
                  Техническая
                  <br /> поддержка
                </h4>
                <p className={style.helps_article__descr}>
                  Решение всех вопросов оперативно и круглосуточно
                </p>
                <Link href={''} className={style.helps_article__link}>
                  Найти ответ
                </Link>
              </article>
            </li>
            <li className={style.helps_section__list_item}>
              <article className={`${style.helps_section__list_article} ${style.helps_article}}`}>
                <h4 className={style.helps_article__title}>Блог</h4>
                <p className={style.helps_article__descr}>
                  Полезные материалы, тренды, аналитика и лайфхаки
                </p>
                <Link href={''} className={style.helps_article__link}>
                  Найти ответ
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

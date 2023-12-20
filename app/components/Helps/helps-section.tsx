import style from "./helps-section.module.scss";
import Link from "next/link";
import Image from "next/image";
export const HelpsSection = () => {
  return (
    <section className={`{"main__helps_section"} ${style.helps_section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <h3 className={style.section__title}>Поможем на всех этапах</h3>
          <ul className={style.section__list}>
            <li className={style.section__list_item}>
              <article
                className={`${style.section__list_article} ${style.helps_article}}`}
              >
                <div className={style.article__block}>
                  <h4 className={style.article__title}>
                    База
                    <br /> знаний
                  </h4>
                  <div className={style.article__img}>
                    <Image
                      src="/icon1.png"
                      width={100}
                      height={100}
                      alt="icon"
                    />
                  </div>
                </div>
                <p className={style.article__descr}>
                  Подробные инструкции по работе с сервисами hostname.com
                </p>
                <Link href={""} className={style.article__link}>
                  Найти ответ
                </Link>
              </article>
            </li>
            <li className={style.section__list_item}>
              <article
                className={`${style.section__list_article} ${style.article}}`}
              >
                <div className={style.article__block}>
                  <h4 className={style.article__title}>
                    Техническая
                    <br /> поддержка
                  </h4>
                  <div className={style.article__img}>
                    <Image
                      src="/icon2.png"
                      width={100}
                      height={100}
                      alt="icon"
                    />
                  </div>
                </div>
                <p className={style.article__descr}>
                  Решение всех вопросов оперативно и круглосуточно
                </p>
                <Link href={""} className={style.article__link}>
                  Найти ответ
                </Link>
              </article>
            </li>
            <li className={style.section__list_item}>
              <article
                className={`${style.section__list_article} ${style.article}}`}
              >
                <div className={style.article__block}>
                  <h4 className={style.article__title}>Блог</h4>
                  <div className={style.article__img}>
                    <Image
                      src="/icon3.png"
                      width={100}
                      height={100}
                      alt="icon"
                    />
                  </div>
                </div>
                <p className={style.article__descr}>
                  Полезные материалы, тренды, аналитика и лайфхаки
                </p>
                <Link href={""} className={style.article__link}>
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

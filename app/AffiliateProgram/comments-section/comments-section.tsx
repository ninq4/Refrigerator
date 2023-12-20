import style from './comments-section.module.scss';
import { Slider } from '@/app/components/slider/slider';


export const CommentsSection = () => {
  return (
    <section className={`main__comments_section ${style.comments_section}`}>
      <div className={style.comments_section__container}>
        <div className={style.comments_section__inner}>
          <h3 className={style.comments_section__title}>Отзывы наших клиентов</h3>
          <Slider/>
        </div>
      </div>
    </section>
  );
};



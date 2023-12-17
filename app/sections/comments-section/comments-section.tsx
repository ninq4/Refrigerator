import style from './comments-section.module.scss';
import Image from 'next/image';
import { RenderComment } from './render-comment/renderComment';
import { text } from 'stream/consumers';
import { comments } from './commentsList/commentsList';
import { Slider } from '@/app/components/slider/slider';


export const CommentsSection = () => {
    if (text.length > 100){
    }
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



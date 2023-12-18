'use client';
import style from '@/app/sections/comments-section/comments-section.module.scss';
import { comments } from '@/app/sections/comments-section/commentsList/commentsList';
import { RenderComment } from '@/app/sections/comments-section/render-comment/renderComment';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { NavButtons } from './NavButtons/navButtons';
import { observer } from 'mobx-react-lite';
import CommentsStore from '@/app/store/fetchComments';
import { useEffect } from 'react';
// import 'swiper/css/navigation';

export const Slider = observer(() => {
  const { fetchComments, comment } = CommentsStore;
  useEffect(() => {
    fetchComments();
  },[])
  console.log(comment)
  return (
    <Swiper
      modules={[Navigation]}
      centeredSlides={true}
      slidesPerView={3}
      loop
      spaceBetween={40}
      className={style.comments_section__swiper}>
      <ul className={style.comments_section__list}>
        {comment.map((comment: any, pos: number) => (
          <SwiperSlide key={pos}>
            <RenderComment
              name={comment.name}
              surname={comment.surname}
              avatar={comment.avatar}
              comment={comment.comment}
            />
          </SwiperSlide>
        ))}
      </ul>
      <NavButtons />
    </Swiper>
  );
});

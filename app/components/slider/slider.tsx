'use client';
import style from '@/app/sections/comments-section/comments-section.module.scss';
import { comments } from '@/app/sections/comments-section/commentsList/commentsList';
import { RenderComment } from '@/app/sections/comments-section/render-comment/renderComment';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { NavButtons } from './NavButtons/navButtons';
// import 'swiper/css/navigation';

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      centeredSlides={true}
      slidesPerView={3}
      loop
      spaceBetween={40}
      className={style.comments_section__swiper}>
      <ul className={style.comments_section__list}>
        {comments.map((comment, pos) => (
          <SwiperSlide key={pos}>
            <RenderComment {...comment} />
          </SwiperSlide>
        ))}
      </ul>
      <NavButtons />
    </Swiper>
  );
};

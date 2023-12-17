'use client';
import style from '@/app/sections/comments-section/comments-section.module.scss';
import { useSwiper } from 'swiper/react';
import prevChevron from '@/public/nav-prev.svg';
import nextChevron from '@/public/nav-next.svg';
import Image from 'next/image';
export const NavButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()} className={style.comments_section__button_prev}>
        <Image src={prevChevron} alt="" />
      </button>
      <button onClick={() => swiper.slideNext()} className={style.comments_section__button_next}>
        <Image src={nextChevron} alt="" />
      </button>
    </>
  );
};

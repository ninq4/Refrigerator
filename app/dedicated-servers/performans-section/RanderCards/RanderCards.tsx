import React from 'react';
import style from '../performans-section.module.scss';
import Image, { StaticImageData } from 'next/image';
export const RenderCards = ({image, title, descr}:{
    image: StaticImageData,
    title: string,
    descr: string
}) => (
  <li className={style.performans_section__item}>
    {image && <Image src={image} className={style.performans_section__item_image} alt="" />}
    <h3 className={style.performans_section__item_title}>{title}</h3>
    <p className={style.performans_section__item_descr}>{descr}</p>
  </li>
);

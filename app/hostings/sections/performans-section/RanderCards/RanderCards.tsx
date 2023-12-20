import React from 'react';
import style from '../performans.module.scss';
import Image, { StaticImageData } from 'next/image';
export const RenderCards = ({image, title, descr}:{
    image: StaticImageData,
    title: string,
    descr: string
}) => (
  <li className={style.section__item}>
    {image && <Image src={image} className={style.section__item_image} alt="" />}
    <h3 className={style.section__item_title}>{title}</h3>
    <p className={style.section__item_descr}>{descr}</p>
  </li>
);

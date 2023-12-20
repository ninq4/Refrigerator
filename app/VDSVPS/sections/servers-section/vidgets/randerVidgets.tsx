'use client';
import style from '../servers.module.scss';
import Image from 'next/image';
import { useOpenVidget } from '@/app/hooks/useOpenVidget';
import { useState } from 'react';

export const RanderVidget = ({
  name,
  image,
  inner,
  chevron,
  title,
}: {
  name: string;
  image?: string;
  inner?: {
    image: string;
    name: string;
  }[];
  chevron?: string;
  title: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={`${style.section__vidget__item}`}>
      <p className={style.section__vidget_title}>{title}</p>
      <div
        onClick={() => setOpen(!open)}
        className={`${style.section__vidget} ${style.vidget} ${open ? style.active : ''}`}>
        <header className={style.vidget__header}>
          <div className={style.vidget__nameWrapper}>
            {image && <Image alt="" src={image} className={style.vidget__image} />}
            <p className={style.vidget__name}>{name}</p>
          </div>
          {chevron && (
            <Image
              src={chevron}
              alt=""
              className={`${style.vidget__chevron} ${open ? style.active : ''}`}
            />
          )}
        </header>
        {inner &&
          inner.map((item) => (
            <div
              style={item.name === undefined ? { display: 'none' } : undefined}
              className={style.vidget__body}>
              <RanderVidgetInner key={item.name} name={item.name} image={item.image} />
            </div>
          ))}
      </div>
    </li>
  );
};
const RanderVidgetInner = ({ name, image }: { name: string; image: string }) => {
  return (
    <div
      style={name === undefined ? { display: 'none' } : undefined}
      className={style.vidget__header}>
      <div className={style.vidget__nameWrapper}>
        <Image alt="" src={image} className={style.vidget__image} />
        <p className={style.vidget__name}>{name}</p>
      </div>
    </div>
  );
};

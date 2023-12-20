import Image from 'next/image';
import Link from 'next/link';
import style from '../header.module.scss';
import { SetStateAction } from 'react';
export function HeaderBottomMenuItem({
  link,
  image,
  alt,
  text,
  open,
  openBurger,
  handleToggleBurger,
}: {
  link: string;
  image?: string;
  alt: string;
  text?: string;
  open?: boolean;
  openBurger?: boolean;
  handleToggleBurger?: (setOpenBurger: SetStateAction<boolean>) => void;
}) {
  const handleClick = () => {
    if (handleToggleBurger) {
      handleToggleBurger(!openBurger);
    }
  };

  const activeClass = open ? style.active : '';

  return (
    <li onClick={handleClick} className={`${style.header__menu_item} ${activeClass}`}>
      <Link className={style.header__menu_link} href={link}>
        {image && <Image src={image} alt={alt} />}
        {text}
      </Link>
    </li>
  );
}

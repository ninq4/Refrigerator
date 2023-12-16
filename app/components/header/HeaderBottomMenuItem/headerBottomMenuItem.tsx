import Image from 'next/image';
import Link from 'next/link';
import style from '../header.module.scss';
export function HeaderBottomMenuItem({
    link,
    image,
    alt,
    text,
    opened,
  }: {
    link: string;
    image?: string;
    alt: string;
    text?: string;
    opened?: boolean;
  }) {
    return (
      <li className={`${style.header__menu_item} ${opened ? `${style.active}` : ''}`}>
        <Link className={style.header__menu_link} href={link}>
          {image && <Image src={image} alt={alt} />}
          {text}
        </Link>
      </li>
    );
  }
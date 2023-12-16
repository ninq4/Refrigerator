import Link from "next/link";
import Image from "next/image";
import style from "../header.module.scss";
export function HeaderTopMenuItem({
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
      <li className={`${style.header__top_item} ${opened ? `${style.active}` : ''}`}>
        <Link className={style.header__top_link} href={link}>
          {image && <Image src={image} alt={alt} />}
          {text}
        </Link>
      </li>
    );
  }
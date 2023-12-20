
import Link from "next/link";
import Image from "next/image";
import style from "../header.module.scss";
export function HeaderTopMenuItem({
  link,
  image,
  alt,
  text,
  open,
}: {
  link: string;
  image?: string;
  alt: string;
  text?: string;
  open?: boolean;
}) {
  const itemClassName = `${style.header__top_item} ${open ? `${style.active}` : ''}`;
  const linkClassName = style.header__top_link;

  return (
    <li className={itemClassName}>
      <Link className={linkClassName} href={link}>
        {image && <Image src={image} alt={alt} className={style.header__top_img} />}
        {text}
      </Link>
    </li>
  );
}

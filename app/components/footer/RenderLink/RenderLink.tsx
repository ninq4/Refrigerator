import Link from "next/link";
import style from "../footer.module.scss"
export function RenderLink({href, title} : {href: string, title: string}) {
    return (
      <li className={style.footer__item}>
        <Link href={href} className={style.footer__item_link}>
          {title}
        </Link>
      </li>
    );
  }
  
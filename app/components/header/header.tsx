import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import { DomenButton } from '../domensButton/domensButton';

import user from '@/public/user.svg';
import bookmark from '@/public/bookmarks.svg';
import card from '@/public/bx-credit-card.svg';
import massegeSquare from '@/public/bx-message-square-dots.svg';
export default function Header() {
  return (
    <header className={`{"body__header"} ${style.header}`}>
      <div className={style.header__container}>
        <div className={style.header__inner}>
          <div className={style.header__top}>
            <Link href={'/'} className={style.header__top_logo}>
              Fucking. Refrigerator
            </Link>
            <menu className={style.header__top_menu}>
              <li className={style.header__top_item}>
                <Link className={style.header__top_link} href={'/'}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM4 6H20V8H4V6ZM4 18V12H20.001L20.002 18H4Z"
                      fill="white"
                    />
                    <path d="M6 14H12V16H6V14Z" fill="white" />
                  </svg>
                </Link>
              </li>
              <li className={style.header__top_item}>
                <Link className={style.header__top_link} href={'/'}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 5H6C4.897 5 4 5.897 4 7V23L10 19.399L16 23V7C16 5.897 15.103 5 14 5ZM14 19.467L10 17.068L6 19.467V7H14V19.467Z"
                      fill="white"
                    />
                    <path
                      d="M18 1H10C8.897 1 8 1.897 8 3H16C17.103 3 18 3.897 18 5V15.443L20 17.932V3C20 1.897 19.103 1 18 1Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li className={style.header__top_item}>
                <Link className={style.header__top_link} href={'/'}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 2H8C4.691 2 2 4.691 2 8V20C2 20.2652 2.10536 20.5196 2.29289 20.7071C2.48043 20.8946 2.73478 21 3 21H16C19.309 21 22 18.309 22 15V8C22 4.691 19.309 2 16 2ZM20 15C20 17.206 18.206 19 16 19H4V8C4 5.794 5.794 4 8 4H16C18.206 4 20 5.794 20 8V15Z"
                      fill="white"
                    />
                    <path
                      d="M9.5 13C10.3284 13 11 12.3284 11 11.5C11 10.6716 10.3284 10 9.5 10C8.67157 10 8 10.6716 8 11.5C8 12.3284 8.67157 13 9.5 13Z"
                      fill="white"
                    />
                    <path
                      d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li className={style.header__top_item}>
                <Link className={style.header__top_link} href={'/'}>
                  <Image src={user} alt="" />
                  Вход
                </Link>
              </li>
              <li className={style.header__top_item}>
                <Link href={'/'}>Регистрация</Link>
              </li>
            </menu>
          </div>
          <menu className={style.header__bottom_menu}>
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                Хостинг
              </Link>
            </li>
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                VDS и VPS
              </Link>
            </li>
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                Почта
              </Link>
            </li>
            <DomenButton />
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                Выделенные сервера
              </Link>
            </li>
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                Конструктор сайтов
              </Link>
            </li>
            <li className={style.header__menu_item}>
              <Link className={style.header__menu_link} href={'/'}>
                Партнерская программа
              </Link>
            </li>
          </menu>
        </div>
      </div>
    </header>
  );
}

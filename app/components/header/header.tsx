'use client';
import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import Card from '@/public/bx-credit-card.svg';
import BookMark from '@/public/bookmarks.svg';
import MessageBox from '@/public/bx-message-square-dots.svg';
import user from '@/public/user.svg';

import { DomenButton } from './domensButton/domensButton';
import { useOpenVidget } from '../../hooks/useOpenVidget';
import { HeaderTopMenuItem } from './HeaderMenuItem/headerMenuItem';
import { HeaderBottomMenuItem } from './HeaderBottomMenuItem/headerBottomMenuItem';

export default function Header() {
  const { open, handleToggle } = useOpenVidget(false);
  const menuItems = [
    { link: '/', image: Card, alt: 'Card' },
    { link: '/', image: BookMark, alt: 'BookMark' },
    { link: '/', image: MessageBox, alt: 'MessageBox' },
    { link: '/LogIn', image: user, alt: '', text: 'Вход' },
    { link: '/SignIn', text: 'Регистрация', alt: 'Registration' },
  ];

  return (
    <header className={`body__header ${style.header}`}>
      <div className={style.header__container}>
        <div className={style.header__inner}>
          <div className={style.header__top}>
            <Link href={"/"} className={`${style.header__top_logo} ${open ? `${style.active}` : ''}`}>
              Fucking. Refrigerator
            </Link>
            <menu className={style.header__top_menu}>
              {menuItems.map((item, pos) => (
                <HeaderTopMenuItem
                  key={pos}
                  link={item.link}
                  image={item.image}
                  alt={item.alt}
                  text={item.text}
                  open={open}
                />
              ))}
            </menu>
          </div>
          <menu className={style.header__bottom_menu}>
            <HeaderBottomMenuItem link={'/hostings'} text="Хостинг" alt="Hosting" open={open} />
            <HeaderBottomMenuItem link={"/VDSVPS"} text="VDS и VPS" alt="VDS and VPS" open={open} />
            <HeaderBottomMenuItem link={"/mail"} text="Почта" alt="Mail" open={open} />
            <DomenButton open={open} handleToggle={handleToggle} />
            <HeaderBottomMenuItem link={"/dedicated-servers"} text="Выделенные сервера" alt="Selected servers" />
            <HeaderBottomMenuItem link="/WebsiteBuilder" text="Конструктор сайтов" alt="Website builder" />
            <HeaderBottomMenuItem
              link={"/AffiliateProgram"}
              text="Партнерская программа"
              alt="Partnership program"
              open={open}
            />
          </menu>
        </div>
      </div>
    </header>
  );
}

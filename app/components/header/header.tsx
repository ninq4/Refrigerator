'use client';
import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import Card from '@/public/bx-credit-card.svg';
import BookMark from '@/public/bookmarks.svg';
import MessageBox from '@/public/bx-message-square-dots.svg';
import user from '@/public/user.svg';

import { DomenButton } from '../domensButton/domensButton';
import { useOpenVidget } from '../../hooks/useOpenVidget';
import { HeaderTopMenuItem}  from './HeaderMenuItem/headerMenuItem';
import { HeaderBottomMenuItem } from './HeaderBottomMenuItem/headerBottomMenuItem';

export default function Header() {
  const { open, handleToggle } = useOpenVidget(false);
  console.log('open:', open);
  console.log('handleToggle:', handleToggle);

  return (
    <header className={`body__header ${style.header}`}>
      <div className={style.header__container}>
        <div className={style.header__inner}>
          <div className={style.header__top}>
            <Link href="/" className={`${style.header__top_logo} ${open ? `${style.active}` : ''}`}>
              Fucking. Refrigerator
            </Link>
            <menu className={style.header__top_menu}>
              {[
                { link: '/', image: Card, alt: 'Card' },
                { link: '/', image: BookMark, alt: 'BookMark' },
                { link: '/', image: MessageBox, alt: 'MessageBox' },
                { link: '/', image: user, alt: '', text: 'Вход' },
                { link: '/', text: 'Регистрация', alt: 'Registration' },
              ].map((item, index) => (
                <HeaderTopMenuItem
                  key={index}
                  link={item.link}
                  image={item.image}
                  alt={item.alt}
                  text={item.text}
                  opened={open}
                />
              ))}
            </menu>
          </div>
          <menu className={style.header__bottom_menu}>
            <HeaderBottomMenuItem link="/" text="Хостинг" alt="Hosting" opened={open} />
            <HeaderBottomMenuItem link="/" text="VDS и VPS" alt="VDS and VPS" opened={open} />
            <HeaderBottomMenuItem link="/" text="Почта" alt="Mail" opened={open} />
            <DomenButton open={open} handleToggle={handleToggle} />
            <HeaderBottomMenuItem link="/" text="Выделенные сервера" alt="Selected servers" />
            <HeaderBottomMenuItem link="/" text="Конструктор сайтов" alt="Website builder" />
            <HeaderBottomMenuItem
              link="/"
              text="Партнерская программа"
              alt="Partnership program"
              opened={open}
            />
          </menu>
        </div>
      </div>
    </header>
  );
}




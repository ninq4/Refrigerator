'use client';
import style from '../header.module.scss';
import chevronRight from '@/public/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction, useEffect } from 'react';

export const DomenButton = ({
  open,
  handleToggle,
  handleToggleBurger,
  openBurger,
}: {
  open: boolean;
  handleToggle: (setOpen: SetStateAction<boolean>) => void;
  handleToggleBurger: (setOpenBurger: SetStateAction<boolean>) => void;
  openBurger: boolean;
}) => {
  return (
    <>
      <li className={`${style.header__menu_item} ${open ? `${style.active}` : ''}`}>
        <button
          className={`${style.header__menu_link} ${open ? `${style.active}` : ''}`}
          onClick={() => handleToggle(!open)}>
          Домены
          <Image
            className={`${style.header__menu_chevron} ${open ? `${style.active}` : ''}`}
            src={chevronRight}
            alt={'chevron-right'}
          />
        </button>
        <menu className={`${style.header__vidget} ${open ? `${style.active}` : ''}`}>
          {renderLink('/registryDomens', 'Регистрация домена', 'Лучшие цены на регистрацию', handleToggle, handleToggleBurger, openBurger)}
          {renderLink('/SSL', 'SSL-сертификаты', 'Повышают репутацию вашего сайта', handleToggle, handleToggleBurger, openBurger)}
          {renderLink('/DomainTransfer', 'Перенос домена в HostName', 'Смена регистратора домена', handleToggle, handleToggleBurger, openBurger)}
          {renderLink('/WhoIs', 'Сервис Whois', 'Whois-проверка домена', handleToggle, handleToggleBurger, openBurger)}
          {renderLink('/DomainRenew', 'Продление домена', 'Общая информация о хостинге', handleToggle, handleToggleBurger, openBurger)}
        </menu>
      </li>
      <div onClick={() => handleToggle(!open)} className={`${style.header__overlay} ${open ? `${style.active}` : ''}`}></div>
    </>
  );
};

const renderLink = (
  href: string,
  title: string,
  descr: string,
  handleToggle: (setOpen: SetStateAction<boolean>) => void,
  handleToggleBurger?: (setOpenBurger: SetStateAction<boolean>) => void,
  openBurger?: boolean,
) => {
  const handleClick = () => {
    if (handleToggleBurger) {
      handleToggleBurger(!openBurger);
    }
    handleToggle(!open);
  };

  return (
    <li onClick={handleClick} className={style.header__vidget_item}>
      <Link href={href} className={style.header__vidget_link}>
        <div className={style.header__vidget_wrapper}>
          <p className={style.header__vidget_title}>{title}</p>
          <p className={style.header__vidget_descr}>{descr}</p>
        </div>
        <Image alt="" src={''} />
      </Link>
    </li>
  );
};

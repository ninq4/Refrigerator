'use client';
import style from '../header.module.scss';
import chevronRight from '@/public/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction, useEffect } from 'react';

export const DomenButton = ({
  open,
  handleToggle,
}: {
  open: boolean;
  handleToggle: (setOpen: SetStateAction<boolean>) => void;
}) => {
  // console.log(handleToggle);
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
          {renderLink(
            '/registryDomens',
            'Регистрация домена',
            'Лучшие цены на регистрацию',
            handleToggle,
          )}
          {renderLink('/SSL', 'SSL-сертификаты', 'Повышают репутацию вашего сайта', handleToggle)}
          {renderLink(
            '/DomainTransfer',
            'Перенос домена в HostName',
            'Смена регистратора домена',
            handleToggle,
          )}
          {renderLink('/WhoIs', 'Сервис Whois', 'Whois-проверка домена', handleToggle)}
          {renderLink('/DomainRenew', 'Продление домена', 'Общая информация о хостинге', handleToggle)}
        </menu>
      </li>
      <div
        onClick={() => handleToggle(!open)}
        className={`${style.header__overlay} ${open ? `${style.active}` : ''}`}></div>
    </>
  );
};

const renderLink = (
  href: string,
  title: string,
  descr: string,
  handleToggle: (setOpen: SetStateAction<boolean>) => void,
) => {
  return (
    <li className={`${style.header__vidget_item}`}>
      <Link href={href} onClick={() => handleToggle(!open)} className={style.header__vidget_link}>
        <div className={style.header__vidget_wrapper}>
          <p className={style.header__vidget_title}>{title}</p>
          <p className={style.header__vidget_descr}>{descr}</p>
        </div>
        <Image alt="" src={''} />
      </Link>
    </li>
  );
};

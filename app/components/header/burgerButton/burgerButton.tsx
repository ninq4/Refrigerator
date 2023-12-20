import { SetStateAction } from 'react';
import style from '../header.module.scss';
export const BurgerButton = ({
  openBurger,
  handleToggleBurger,
}: {
  openBurger: boolean;
  handleToggleBurger: (setOpenBurger: SetStateAction<boolean>) => void;
}) => {
  return (
    <button onClick={() => handleToggleBurger(!openBurger)} className={`${style.header__top_burger} ${openBurger ? `${style.active_burger}` : ''}`}>
      <span></span>
    </button>
  );
};

'use client';
import { useState, useEffect } from 'react';

export const useOpenBurger: Function = (initialValueBurger: boolean) => {
  const [openBurger, setOpenBurger] = useState(initialValueBurger);

  const handleToggleBurger = () => {
    setOpenBurger(!openBurger);
    window.top?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // useEffect(() => {
  //   const htmlElement = document.getElementsByTagName('html')[0];
  //   htmlElement.style.overflowY = openBurger ? 'hidden' : 'auto';

  //   return () => {
  //     htmlElement.style.overflowY = 'auto';
  //   };
  // }, [openBurger]);
  

  return { openBurger, handleToggleBurger, setOpenBurger };
};

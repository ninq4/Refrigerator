'use client';
import { useState, useEffect } from 'react';

export const useOpenBurger = (initialValueBurger: boolean) => {
  const [openBurger, setOpenBurger] = useState(initialValueBurger);

  const handleToggleBurger = () => {
    setOpenBurger(!openBurger);
    window.top?.scrollTo({ top: 0, behavior: 'smooth' });
  };

const blockScroll = () => {
  const htmlElement = document.documentElement;
  htmlElement.style.overflow = openBurger ? 'hidden' : 'auto';
};

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1270) {
      blockScroll();
    }
  }, [openBurger]);

  return { openBurger, handleToggleBurger, setOpenBurger };
};

'use client';
import { useState, useEffect } from 'react';

export const useOpenVidget: Function = (InitialValue: boolean) => {
  const [open, setOpen] = useState(InitialValue);

  const handleToggle = () => {
    setOpen(!open);
    window.top?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.style.overflowY = open ? 'hidden' : 'auto';

    return () => {
      const htmlElement = document.getElementsByTagName('html')[0];
      htmlElement.style.overflowY = 'auto';
    };
  }, [open]);

  return { open, handleToggle };
};

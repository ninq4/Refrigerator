'use client';
import style from '../hero.module.scss';
import { useOpenVidget } from '../../../../hooks/useOpenVidget';
import { useState } from 'react';
export const ButtonOverLay = () => {
  const { open, handleToggle } = useOpenVidget(false);
  const [handleEmailValue, setHandleEmailValue] = useState('');
  const [handleNameValue, setHandleNameValue] = useState('');
  const [handleMessageValue, setHandleMessageValue] = useState('');
  const [handleDirty, setHandleDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Заполните имя и почту');

  const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHandleNameValue(event.target.value);
  };

  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHandleEmailValue(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHandleMessageValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHandleEmailValue('');
    setHandleNameValue('');
    setHandleMessageValue('');
    handleToggle();
  };

  const handleBlur = () => {
    setHandleDirty(true);
    if (!handleEmailValue || !handleNameValue) {
      setErrorMessage('Заполните имя и почту');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <>
      <button onClick={handleToggle} className={style.hero_section__btn}>
        Отправить заявку
      </button>
      <div className={`${style.hero_section__overlay} ${open ? style.active : ''}`}>
        <form
          onSubmit={handleSubmit}
          className={`${style.hero_section__overlay_form} ${style.hero_form}`}>
          {errorMessage && handleDirty && <p className={style.hero_form__error}>{errorMessage}</p>}

          <div className={style.hero_form__top}>
            <input
              onBlur={handleBlur}
              value={handleNameValue}
              onChange={handleInputNameChange}
              placeholder="Ваше имя"
              type="text"
              className={style.hero_form__input}
            />
            <input
              onBlur={handleBlur}
              value={handleEmailValue}
              onChange={handleInputEmailChange}
              placeholder="Ваша почта"
              type="text"
              className={style.hero_form__input}
            />
          </div>
          <textarea
            value={handleMessageValue}
            onChange={handleMessageChange}
            placeholder="Ваше сообщение"
            className={style.hero_form__input_bottom}
            name=""
            id=""
            cols={30}
            rows={10}></textarea>
          <button onClick={() => handleSubmit} className={style.hero_form__btn}>
            Отправить заявку
          </button>
        </form>
      </div>
    </>
  );
};

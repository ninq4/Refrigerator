import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from './page.module.scss';
export default function NotFound() {
  return (
    <div>
      <section className={style.notFound}>
        <div className={style.notFound__container}>
          <Link href={'/'} className={style.notFound__inner}>
            <Image
              alt="404"
              src="/404.png"
              width={600}
              height={600}
              className={style.notFound__image}
            />
            <h1 className={style.notFound__title}>404</h1>
          </Link>
        </div>
      </section>
    </div>
  );
}

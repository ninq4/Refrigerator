import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from './page.module.scss';
export default function NotFound() {
  return (
    <div>
      <Image alt="404" src="/404.png" width={600} height={600} className={style.error} />
      <h1 className={style.txt}>404</h1>
      {/* <div>
        <Link href="/">Go back to Home</Link>
      </div> */}
    </div>
  );
}

import Link from 'next/link';
import style from './footer.module.scss';
import { AboutList, ClientList, PartnerList } from './Lists/FooterLists';
import { RenderLink } from './RenderLink/RenderLink';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`body__header ${style.footer}`}>
      <div className={style.footer__container}>
        <div className={style.footer__top}>
          <div className={style.footer__listWrapper}>
            <h4 className={style.footer__title}>Клиентам</h4>
            <ul className={style.footer__list}>
              {ClientList.map((item, pos) => (
                <RenderLink key={pos} href={item.href} title={item.title} />
              ))}
            </ul>
          </div>
          <div className={style.footer__listWrapper}>
            <h4 className={style.footer__title}>Партнерам</h4>
            <ul className={style.footer__list}>
              {PartnerList.map((item, pos) => (
                <RenderLink key={pos} href={item.href} title={item.title} />
              ))}
            </ul>
          </div>
          <div className={style.footer__listWrapper}>
            <h4 className={style.footer__title}>Продукты</h4>
            <ul className={style.footer__list}>
              {PartnerList.map((item, pos) => (
                <RenderLink key={pos} href={item.href} title={item.title} />
              ))}
            </ul>
          </div>
          <div className={style.footer__listWrapper}>
            <h4 className={style.footer__title}>О компании</h4>
            <ul className={style.footer__list}>
              {AboutList.map((item, pos) => (
                <RenderLink key={pos} href={item.href} title={item.title} />
              ))}
            </ul>
          </div>
          <div className={style.footer__info}>
            <Link href={''} className={style.footer__phone}>
              Номер: <p className={style.footer__phone_item}>+7(999)-999-99-99</p>
            </Link>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <Link href={'/'} className={style.footer__logo}>
            <Image src="/logo.png" width={20} height={20} alt="logo" />
            Refrigerator
          </Link>
          <div className={style.footer__bottom_info}>
            <p className={style.footer__copytright}>© ООО «Зеленоглазое такси»</p>
            <div className={style.footer__rules}>
              <Link href={''} className={style.footer__rules_item}>
                Правовая информация
              </Link>{' '}
              и{' '}
              <Link href={''} className={style.footer__rules_item}>
                Правила пользователя
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import style from '../domen.module.scss';
export function DomenListItem({
  title,
  price,
  oldPrice,
}: {
  title: string;
  price: string;
  oldPrice?: string;
}) {

  return (
    <li className={style.domen_section__item}>
        {title} {price} ₽
        <p className={style.domen_section__oldprice} style={oldPrice === "" ? { display: 'none' } : {}}>
          {oldPrice} ₽
        </p>
    </li>
  );
}

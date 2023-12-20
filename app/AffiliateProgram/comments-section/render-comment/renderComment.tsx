import style from '../comments-section.module.scss';
import Image from 'next/image';
import user from '@/public/user.svg';
import chevron from '@/public/chevron-right.svg';
import Link from 'next/link';

export const RenderComment = ({
  name,
  surname,
  avatar,
  comment,
}: {
  name: string;
  surname?: string;
  avatar: any;
  comment: string;
}) => {
  const slicedText = comment.length > 110? comment.slice(0, 110) + '...' : comment;
  const showMore =
    comment.length > 110 ? (
      <Link href={''} className={style.comments_section__item_more}>
        Читать полностью
      </Link>
    ) : null;

  return (
    <article className={style.comments_section__item}>
      <header className={style.comments_section__item_header}>
        <div className={style.comments__item_circleAvatar}>
          <Image src={avatar} alt="avatar" className={style.comments_section__item_avatar} />
        </div>
        <h4 className={style.comments_section__item__name}>
          {name} {surname}
        </h4>
      </header>
      <p className={style.comments_section__item_content}>
        {slicedText}
        {showMore}
      </p>
    </article>
  );
}

import style from './SSLs.module.scss';
import { RenderList } from './RenderCard/RenderList';
import { RenderCard } from './RenderCard/RenderCard';

export const SSLsSection = () => {

  return (
    <section className={style.section}>
      <div className={style.section__container}>
        <ul className={style.section__inner}>
        {RenderList.map((item, pos) => (
          <RenderCard key={pos} title={item.title} price={item.price} list={item.items} />
        ))}
        </ul>
      </div>
    </section>
  );
};


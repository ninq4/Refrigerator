import style from '../servers.module.scss';
import { VidgetItems } from './vidgetItems';
import { RanderVidget } from './randerVidgets';

export const Vidgets = () => {
  return (
    <ul className={style.section__vidget_list}>
      {VidgetItems.map((item, pos) => (
        <RanderVidget
          key={pos}
          name={item.name}
          image={item.image}
          inner={item.inner}
          chevron={item.chevron}
          title={item.title}
        />
      ))}
    </ul>
  );
};



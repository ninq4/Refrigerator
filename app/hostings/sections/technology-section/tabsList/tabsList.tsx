'use client';
import TabsBtns from '../tabsBtns/tabsBtns';
import style from '../technology.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { CMSList, FrameworkList, TechnologyList } from '../itemsList/itemsList';
export const TabsList = () => {
  const [category, setCategory] = useState(0);

  const renderItems = (items: any) => {
    return items.map((item: any, pos: number) => (
      <RanderItems key={pos} name={item.name} image={item.image} />
    ));
  };

  let itemList;
  if (category === 0) {
    itemList = renderItems(CMSList);
  } else if (category === 1) {
    itemList = renderItems(FrameworkList);
  } else if (category === 2) {
    itemList = renderItems(TechnologyList);
  }

  return (
    <>
      <TabsBtns category={category} setCategoryId={(id: number) => setCategory(id)} />
      <ul className={style.section__list}>{itemList}</ul>
    </>
  );
};

const RanderItems = ({ image, name }: { image: string; name: string }) => {
  return (
    <li className={style.section__item}>
      <Image alt="" src={image} className={style.section__image} />
      <p className={style.section__name}>{name}</p>
    </li>
  );
};

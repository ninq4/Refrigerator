import Windows from '@/public/windows.svg';
import Linux from '@/public/linux.svg';
import Light from '@/public/light-accent.svg';
import Disk from '@/public/disk.svg';
import Chevron from '@/public/chevron-accent.svg';
export const VidgetItems = [
  {
    title: 'Процессор',
    name: '3.3 ГЦ',
    image: Light,
    inner: [
      {
        image: Light,
        name: '2.2 ГЦ',
      },
    ],
    chevron: Chevron,
  },
  {
    title: 'Диски',
    name: 'NVMe',
    image: Disk,
  },
  {
    title: 'ОС',
    name: 'Windows',
    image: Windows,
    inner: [
      {
        image: Linux,
        name: 'Linux',
      },
    ],
    chevron: Chevron,
  },
  {
    title: 'Срок',
    name: '12 мес',
    image: '',
    inner: [
      {
        image: '',
        name: '6 мес',
      },
      {
        image: '',
        name: '3 мес',
      },
      {
        image: '',
        name: '1 мес',
      },
    ],
    chevron: Chevron,
  },
];

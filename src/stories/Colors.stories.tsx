import clsx from 'clsx';
import type { Meta } from '@storybook/react';
import type { WithClassName } from '@/types';
import s from './Colors.module.css';

const meta = {
  title: 'Colors',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

const GridTemplate: React.FC<
  WithClassName<{
    colorsConfig: { name: string; className: string }[];
  }>
> = ({ className, colorsConfig }) => {
  return (
    <div className={s['wrap']}>
      {colorsConfig.map(({ name, className: colorClassName }) => {
        return (
          <div className={clsx(s.item, className, colorClassName)} key={name}>
            <p className={s.title}>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export const TextColors = () => {
  const colorsConfig = [
    {
      name: 'White',
      className: s['white'],
    },
    {
      name: 'Pink-100',
      className: s['pink-100'],
    },
    {
      name: 'Bright-Pink-100',
      className: s['bright-pink-100'],
    },
  ];

  return <GridTemplate className={s.text} colorsConfig={colorsConfig} />;
};

export const StrokeColors = () => {
  const colorsConfig = [
    {
      name: 'Blue-100',
      className: s['blue-100'],
    },
    {
      name: 'Pink-100',
      className: s['pink-100'],
    },
    {
      name: 'Blue, Violet Gradient',
      className: s['blue-violet-gradient'],
    },
    {
      name: 'Gradient blue Horizontal',
      className: s['gradient-blue-horizontal'],
    },
    {
      name: 'Dark Violet Gradient',
      className: s['dark-violet-gradient'],
    },
    {
      name: 'Bright Violet Gradient',
      className: s['bright-violet-gradient'],
    },
    {
      name: 'Radial blue Gradient',
      className: s['radial-blue-gradient'],
    },
    {
      name: 'Violet, Grey Gradient',
      className: s['violet-grey-gradient'],
    },
    {
      name: 'Upper Blue Gradient',
      className: s['upper-blue-gradient'],
    },
    {
      name: 'Grey-100',
      className: s['grey-100'],
    },
    {
      name: 'Left Blue Gradient',
      className: s['left-blue-gradient'],
    },
    {
      name: 'White 50',
      className: s['white-50'],
    },
    {
      name: 'Angular White Gradient',
      className: s['angular-white-gradient'],
    },
  ];

  return <GridTemplate className={s.stroke} colorsConfig={colorsConfig} />;
};

export const BackgroundColors = () => {
  const colorsConfig = [
    {
      name: 'Dark Violet 100',
      className: s['dark-violet-100'],
    },
    {
      name: 'Blue Gradient 100',
      className: s['blue-100'],
    },
    {
      name: 'Half blur 30',
      className: s['half-blur-30'],
    },
    {
      name: 'Photo blur',
      className: s['photo-blur'],
    },
    {
      name: 'Main black 100',
      className: s['main-black-100'],
    },
    {
      name: 'Blue 10',
      className: s['blue-10'],
    },
    {
      name: 'Vertical Blue Gradient',
      className: s['vertical-blue-gradient'],
    },
    {
      name: 'Overlay black 15',
      className: s['overlay-black-15'],
    },
    {
      name: 'Overlay black 40',
      className: s['overlay-black-40'],
    },
    {
      name: 'Black 90',
      className: s['black-90'],
    },
    {
      name: 'Left Black Overlay',
      className: s['left-black-overlay'],
    },
    {
      name: 'Angular overlay',
      className: s['angular-overlay'],
    },
    {
      name: 'Grey 10',
      className: s['grey-10'],
    },
    {
      name: 'Down blue Gradient',
      className: s['down-blue-gradient'],
    },
    {
      name: 'Grey 100',
      className: s['grey-100'],
    },
    {
      name: 'White 10',
      className: s['white-10'],
    },
    {
      name: 'Glow',
      className: s['glow'],
    },
  ];

  return <GridTemplate className={s.background} colorsConfig={colorsConfig} />;
};

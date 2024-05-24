import type { Meta, StoryObj } from '@storybook/react';
import type { IconProps } from './types';
import { ICON_IDS } from './constants';
import Typography from '../Typography';
import Icon from './Icon';
import s from './Icon.stories.module.css';

const meta = {
  title: 'ui/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

Icon.displayName = 'Icon';

const ExampleAllIcons = (args: IconProps) => {
  return (
    <ul className={s['grid-wrap']}>
      {ICON_IDS.map((iconId) => {
        return (
          <li key={iconId} className={s['grid-item']}>
            <div className={s['icon-wrap']}>
              <Icon {...args} id={iconId} className={s.icon} />
            </div>
            <Typography variant="body-large">{iconId}</Typography>
          </li>
        );
      })}
    </ul>
  );
};

export const Base: Story = {
  args: {
    id: ICON_IDS[0],
    className: s.icon,
  } as IconProps,
};

export const SizeSm: Story = {
  args: {
    ...Base.args,
    id: ICON_IDS[0],
    size: 'sm',
  } as IconProps,
};

export const SizeMd: Story = {
  args: {
    ...Base.args,
    id: ICON_IDS[5],
    size: 'md',
  } as IconProps,
};

export const SizeLg: Story = {
  args: {
    ...Base.args,
    id: ICON_IDS[15],
    size: 'lg',
  } as IconProps,
};

export const AllIcons: Story = {
  args: {} as IconProps,
  render(args) {
    return <ExampleAllIcons {...args} />;
  },
};

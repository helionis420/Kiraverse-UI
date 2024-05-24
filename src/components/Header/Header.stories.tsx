import type { Meta, StoryObj } from '@storybook/react';
import type { HeaderProps } from './types';
import Header from './Header';
import s from './Header.stories.module.css';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: HeaderProps) => {
  return (
    <div className={s.wrap}>
      <Header {...args} />
    </div>
  );
};

export const Base: Story = {
  args: {} as HeaderProps,
  render: Component,
};

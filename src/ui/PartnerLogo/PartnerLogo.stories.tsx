import type { Meta, StoryObj } from '@storybook/react';
import type { PartnerLogoProps } from './types';
import PartnerLogo from './PartnerLogo';
import { PARTNERS_NAMES } from './constants';
import s from './PartnerLogo.stories.module.css';

const meta = {
  title: 'ui/PartnerLogo',
  component: PartnerLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof PartnerLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

const AllLogosComponent = (args: PartnerLogoProps) => {
  return (
    <div className={s.wrap}>
      {PARTNERS_NAMES.map((name) => {
        return <PartnerLogo key={name} {...args} name={name} />;
      })}
    </div>
  );
};

export const Base: Story = {
  args: {
    name: 'adobe',
  } as PartnerLogoProps,
};

export const All: Story = {
  args: {} as PartnerLogoProps,
  render: AllLogosComponent,
};

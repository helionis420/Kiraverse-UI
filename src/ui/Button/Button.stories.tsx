import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonProps } from './types';
import { BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_ICON_SIDE } from './constants';
import Button from './Button';
import s from './Button.stories.module.css';

Button.displayName = 'Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const Component = (args: ButtonProps) => {
  return (
    <div className={s.wrap}>
      <Button {...args} />
    </div>
  );
};

type Story = StoryObj<typeof meta>;

export const VariantPrimary: Story = {
  args: {
    children: 'Get started',
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.MD,
  } as ButtonProps,
  render: Component,
};

export const VariantPrimarySm: Story = {
  args: {
    ...VariantPrimary.args,
    size: BUTTON_SIZES.SM,
  } as ButtonProps,
  render: Component,
};

export const VariantSecondary: Story = {
  args: {
    ...VariantPrimary.args,
    variant: BUTTON_VARIANTS.SECONDARY,
    size: BUTTON_SIZES.MD,
  } as ButtonProps,
  render: Component,
};

export const VariantSecondarySm: Story = {
  args: {
    ...VariantPrimarySm.args,
    variant: BUTTON_VARIANTS.SECONDARY,
  } as ButtonProps,
  render: Component,
};

export const VariantTertiary: Story = {
  args: {
    ...VariantPrimarySm.args,
    children: 'Settings',
    variant: BUTTON_VARIANTS.TERTIARY,
    size: BUTTON_SIZES.MD,
  } as ButtonProps,
  render: Component,
};

export const VariantTertiaryWithIcon: Story = {
  args: {
    ...VariantTertiary.args,
    icon: 'icon-gear_24',
    iconSide: BUTTON_ICON_SIDE.LEFT,
  } as ButtonProps,
  render: Component,
};

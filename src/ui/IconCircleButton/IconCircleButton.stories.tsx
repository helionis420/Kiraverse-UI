import type { Meta, StoryObj } from '@storybook/react';
import type { IconCircleButtonProps } from './types';
import { ICON_CIRCLE_BUTTON_VARIANTS } from './constants';
import IconCircleButton from './IconCircleButton';

IconCircleButton.displayName = 'IconCircleButton';

const meta = {
  title: 'ui/IconCircleButton',
  component: IconCircleButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof IconCircleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantPrimary: Story = {
  args: {
    icon: 'icon-arrow-right_24',
    variant: ICON_CIRCLE_BUTTON_VARIANTS.PRIMARY,
  } as IconCircleButtonProps,
};

export const VariantPrimaryDisabled: Story = {
  args: {
    ...VariantPrimary.args,
    disabled: true,
  } as IconCircleButtonProps,
};

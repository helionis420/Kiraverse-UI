import { useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import type { SwitcherProps } from './types';
import { useToggle } from '@/hooks/useToggle';
import Switcher from './Switcher';

const meta = {
  title: 'ui/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof Switcher>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: SwitcherProps) => {
  const [checked, , setChecked] = useToggle(args.checked);

  const switcherCheckedChange = useCallback(
    (checked: boolean) => {
      action('onCheckedChange')({ checked });
      setChecked(checked);
    },
    [setChecked],
  );

  return <Switcher {...args} checked={checked} onCheckedChange={switcherCheckedChange} />;
};

Switcher.displayName = 'Switcher';

export const Base: Story = {
  args: {
    checked: false,
  } as SwitcherProps,
  render: Component,
};

export const Checked: Story = {
  args: {
    checked: true,
  } as SwitcherProps,
  render: Component,
};

export const DisabledNotChecked: Story = {
  args: {
    checked: false,
    disabled: true,
  } as SwitcherProps,
  render: Component,
};

export const DisabledChecked: Story = {
  args: {
    ...DisabledNotChecked.args,
    checked: true,
  } as SwitcherProps,
  render: Component,
};

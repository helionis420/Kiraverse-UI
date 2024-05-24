import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps } from './types';
import Input from './Input';

const meta = {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: InputProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        action('onChange')(e);
        setValue(e.target.value);
      }}
    />
  );
};

Component.displayName = 'Input';
Input.displayName = 'Input';

export const Base: Story = {
  args: {
    placeholder: 'Enter text',
    className: 'max-w-[18.75rem]',
  } as InputProps,
};

export const WithValue: Story = {
  args: {
    ...Base.args,
    value: 'Value',
  } as InputProps,
  render: Component,
};

export const WithLabel: Story = {
  args: {
    ...Base.args,
    label: 'Label',
  } as InputProps,
};

export const Required: Story = {
  args: {
    ...Base.args,
    label: 'Label',
    required: true,
  } as InputProps,
};

export const WithDescription: Story = {
  args: {
    ...Base.args,
    description: 'Description text goes here',
  } as InputProps,
};

export const WithLabelAndDescription: Story = {
  args: {
    ...Base.args,
    label: 'Label',
    description: 'Description text goes here',
  } as InputProps,
};

export const WithError: Story = {
  args: {
    ...Base.args,
    isError: true,
  } as InputProps,
};

export const WithErrorMessage: Story = {
  args: {
    ...Base.args,
    errorMessage: 'Error message goes here',
  } as InputProps,
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true,
  } as InputProps,
};

export const DisabledWithValue: Story = {
  args: {
    ...Base.args,
    disabled: true,
    value: 'Value',
  } as InputProps,
};

export const Password: Story = {
  args: {
    ...Base.args,
    type: 'password',
  } as InputProps,
  render: Component,
};

export const PasswordDisabled: Story = {
  args: {
    ...Password.args,
    type: 'password',
    disabled: true,
  } as InputProps,
  render: Component,
};

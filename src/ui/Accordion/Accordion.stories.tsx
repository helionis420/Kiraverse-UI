import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import type { AccordionProps } from './types';
import { MOCK_ACCORDION_ITEMS } from './Accordion.mocks';
import Accordion from './Accordion';

const meta = {
  title: 'ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (props: AccordionProps) => {
  const [selectedValue, setSelectedValue] = useState(props.value);

  const valueChangeHandler = (value: string) => {
    action('onValueChange')(value);
    setSelectedValue(value);
  };

  return <Accordion {...props} value={selectedValue} onValueChange={valueChangeHandler} />;
};

export const Base: Story = {
  args: {
    items: MOCK_ACCORDION_ITEMS,
  } as AccordionProps,
};

export const Opened: Story = {
  args: {
    items: MOCK_ACCORDION_ITEMS,
    value: MOCK_ACCORDION_ITEMS[1].id,
  } as AccordionProps,
  render: Component,
};

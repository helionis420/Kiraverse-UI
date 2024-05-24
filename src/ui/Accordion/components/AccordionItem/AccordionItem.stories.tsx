import type { Meta, StoryObj } from '@storybook/react';
import type { AccordionItemProps } from './types';
import { MOCK_ACCORDION_ITEMS } from '../../Accordion.mocks';
import Accordion from '@/ui/Accordion';
import AccordionItem from './AccordionItem';

const meta = {
  title: 'ui/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {} as AccordionItemProps,
  render() {
    return <Accordion items={[MOCK_ACCORDION_ITEMS[0]]} />;
  },
};

export const Opened: Story = {
  args: {} as AccordionItemProps,
  render() {
    return <Accordion items={[MOCK_ACCORDION_ITEMS[1]]} value={MOCK_ACCORDION_ITEMS[1].id} />;
  },
};

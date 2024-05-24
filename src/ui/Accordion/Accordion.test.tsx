import { describe, it, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { MOCK_ACCORDION_ITEMS } from './Accordion.mocks';
import Accordion from './Accordion';

describe('[UI]: Accordion', () => {
  it('should render correctly', () => {
    const { container } = render(<Accordion items={MOCK_ACCORDION_ITEMS} />);

    const accordionItems = screen.getAllByRole('button');
    const closedAccordionItems = container.querySelectorAll('button[data-state="closed"]');

    expect(accordionItems).toHaveLength(MOCK_ACCORDION_ITEMS.length);
    expect(closedAccordionItems).toHaveLength(4);
  });

  it('should render correctly with initially opened item', () => {
    const { container } = render(
      <Accordion items={MOCK_ACCORDION_ITEMS} value={MOCK_ACCORDION_ITEMS[1].id} />,
    );

    const accordionItems = screen.getAllByRole('button');
    const closedAccordionItems = container.querySelectorAll('button[data-state="closed"]');
    const openedAccordionItems = container.querySelectorAll('button[data-state="open"]');

    expect(accordionItems).toHaveLength(MOCK_ACCORDION_ITEMS.length);
    expect(closedAccordionItems).toHaveLength(3);
    expect(openedAccordionItems).toHaveLength(1);
  });

  it('should open accordion item on click', async () => {
    const { container } = render(<Accordion items={MOCK_ACCORDION_ITEMS} />);

    const closedAccordionItems = container.querySelectorAll('button[data-state="closed"]');
    expect(closedAccordionItems).toHaveLength(4);

    const accordionItem = screen.getAllByRole('button')[0];

    await fireEvent.click(accordionItem);

    const newClosedAccordionItems = container.querySelectorAll('button[data-state="closed"]');
    const newOpenedAccordionItems = container.querySelectorAll('button[data-state="open"]');

    expect(newClosedAccordionItems).toHaveLength(3);
    expect(newOpenedAccordionItems).toHaveLength(1);
  });
});

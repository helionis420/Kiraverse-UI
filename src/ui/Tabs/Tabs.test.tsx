import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MOCK_TABS_TITLES } from './Tabs.mocks';
import Tabs from './Tabs';

describe('[UI]: Tabs', () => {
  it('should render correctly', () => {
    render(<Tabs titles={MOCK_TABS_TITLES} />);

    const tabsElements = screen.getAllByRole('tab');

    expect(tabsElements).toHaveLength(MOCK_TABS_TITLES.length);
  });

  it('should have no initial value without defaultValue prop', () => {
    render(<Tabs titles={MOCK_TABS_TITLES} />);

    const tabsElements = screen.getAllByRole('tab');

    tabsElements.forEach((tab) => {
      expect(tab.getAttribute('data-state')).toBe('inactive');
    });
  });

  it('should have initial value with defaultValue prop', () => {
    render(<Tabs titles={MOCK_TABS_TITLES} defaultValue="tab-1" />);

    const tabsElements = screen.getAllByRole('tab');

    expect(tabsElements[0].getAttribute('data-state')).toBe('active');
  });

  it('should change value on click', async () => {
    render(<Tabs titles={MOCK_TABS_TITLES} defaultValue="tab-1" />);

    const tabsElements = screen.getAllByRole('tab');

    expect(tabsElements[0].getAttribute('data-state')).toBe('active');

    await fireEvent.mouseDown(tabsElements[1]);

    const newTabsElements = screen.getAllByRole('tab');

    expect(newTabsElements[0].getAttribute('data-state')).toBe('inactive');
    expect(newTabsElements[1].getAttribute('data-state')).toBe('active');
  });
});

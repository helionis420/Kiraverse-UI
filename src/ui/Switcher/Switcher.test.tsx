import { describe, it, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import type { SwitcherProps } from './types';
import { useToggle } from '@/hooks/useToggle';
import { noop } from '@/utils/common';
import Switcher from './Switcher';

const SwitcherWrapper = (props: Partial<SwitcherProps>) => {
  const [checked, , setChecked] = useToggle(props.checked);

  const switcherCheckedChange = (checked: boolean) => {
    setChecked(checked);
  };

  return <Switcher {...props} checked={checked} onCheckedChange={switcherCheckedChange} />;
};

describe('[UI]:Switcher', () => {
  it('should render', () => {
    render(<Switcher checked={false} onCheckedChange={noop} />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('data-state')).toBe('unchecked');
  });

  it('should render checked', () => {
    render(<Switcher checked onCheckedChange={noop} />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('data-state')).toBe('checked');
  });

  it('should change state from unchecked to checked', async () => {
    render(<SwitcherWrapper checked={false} />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('data-state')).toBe('unchecked');

    await fireEvent.click(switchElement);

    expect(switchElement.getAttribute('data-state')).toBe('checked');
  });

  it('should change state from checked to unchecked', async () => {
    render(<SwitcherWrapper checked />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('data-state')).toBe('checked');

    await fireEvent.click(switchElement);

    expect(switchElement.getAttribute('data-state')).toBe('unchecked');
  });

  it('should not change state when disabled', async () => {
    render(<SwitcherWrapper checked disabled />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('data-state')).toBe('checked');

    await fireEvent.click(switchElement);

    expect(switchElement.getAttribute('data-state')).toBe('checked');
  });
});
